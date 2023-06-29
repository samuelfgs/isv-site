// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import { createClient } from '@supabase/supabase-js'
import { a } from '@react-spring/web';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data: inscritos, error: err1 } = await supabase
    .from('inscritos')
    .select(`
      id,
      name,
      owner_id,
      payments (id, paid)
    `)
    .is("owner_id", null)

  if (err1) {
    res.status(500).json({});
    return ;
  }
  const all = [];
  for (const inscricao of inscritos) {
    const { id, name, owner_id, payments } = inscricao;
    const { id: paymentId, paid } = payments[0] ?? {};

    const mercadoPago = await (await fetch(`https://api.mercadopago.com/v1/payments/search?external_reference=${paymentId}`, {
      headers: {
        authorization: "Bearer APP_USR-4846877984480703-062812-0851d62aca9c156ee183c30017844081-154849269"
      }
    })).json();

    if (mercadoPago.paging.total < 1) continue;
    const result = mercadoPago.results[0];
    if (result.status !== "approved") continue;
    const { error } = await supabase
      .from('payments')
      .update({ paid: true, method: result.payment_method_id })
      .eq('id', paymentId)
    if (error) {
      res.status(500).json({ all, error });
      return ;
    }
    all.push(inscricao);
  }
  res.status(200).json({ all })
}