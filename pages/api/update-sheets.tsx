// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { JWT } from "google-auth-library";
import { google } from "googleapis";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

const spreadsheetId = '1HLv2bfp5Pzc2Tj-2Qn3Zk2fyWLZzOYcPlp9lEQTEJD8';
const auth = new JWT({
  keyFile: './google-sheets.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = {
    internal: {
      paid: [] as any[],
      nonPaid: [] as any[],
      name: "SV-PG-GUA"
    },
    external: {
      paid: [] as any[],
      nonPaid: [] as any[],
      name: "Externo"
    }
  }
  const { data: inscritos, error: err1 } = await supabase
    .from("inscritos")
    .select(`
      *,
      payments (id, paid, lote, account, method)
    `);

  if (err1) {
    res.status(500).json({ err1 });
    return ;
  }

  const getPaymentInfo = (ownerId: string) => 
    inscritos.find(ins => ins.id === +ownerId)?.payments?.[0];
  for (const inscricao of inscritos) {
    const paymentInfo = inscricao.owner_id ? getPaymentInfo(inscricao.owner_id) : inscricao.payments?.[0];
    let obj = inscricao.localidade ? data.internal : data.external;
    let arr = paymentInfo?.paid ? obj.paid : obj.nonPaid;

    const payment = paymentInfo?.paid ? {
      method: paymentInfo?.method ?? "-",
      account: paymentInfo?.account ?? "-",
      lote: paymentInfo?.lote ?? "-",
    } : {
      method: "-",
      account: "-",
      lote: "-"
    }
    arr.push({
      ...inscricao,
      ...payment
    });
  }

  const colOrder = ["name", "localidade", "discipulador", "birthdate", "email", "telefone", "method", "account", "lote", "cpf", "state", "city", "bairro", "logradouro", "number", "price"];
  const sheets = google.sheets({ version: 'v4', auth });
  for (const type of ["internal", "external"] as const) {
    const range = `${data[type].name}!A2:P`;
    const values = [
      ...data[type].paid,
      ...data[type].nonPaid
    ]
    const finalValues = [] as any[];
    for (const value of values) {
      const row = [] as any;
      for (const col of colOrder) {
        if (type === "external" && ["localidade", "discipulador"].includes(col)) continue;
        row.push(value[col])
      }
      finalValues.push(row);
    }
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        range,
        values: finalValues
      }
    });
  }

  res.status(200).json({ inscritos })
}