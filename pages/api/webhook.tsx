// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from "mercadopago";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("dale", req.body);
  await fetch("https://7c6c-2804-868-d048-af9-98ea-b75d-d839-827d.ngrok-free.app/api/collect", {
    method: "POST",
    body: req.body
  });
  const id = 22977802;
  // const id = req.body?.data?.id;
  const mercadoPago2 = await (await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
    headers: {
      authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })).json();
  console.log("dale", mercadoPago2);
  // if (mercadoPago.status === "approved") {
  // }
  // .update({ paid: true, method: mercadoPago.payment_method_id })

  const mercadoPago = { payment_method_id: "pix", external_reference: id };
  const { data: paymentData, error: paymentError } = await supabase
    .from('payments')
    .update({ paid: true, method: mercadoPago.payment_method_id })
    .eq('id', +mercadoPago.external_reference)
    .select("*")

  if (paymentError || !paymentData || paymentData.length !== 1) {
    res.status(500).json({ paymentError, paymentData });
    return ;
  }
  
  const { data, error } = await supabase
    .from("inscritos")
    .select("*")
    .eq("id", paymentData[0].user_id)

  if (error || !data || data.length !== 1) {
    res.status(500).json({error, data});
    return;
  }
  const inscrito = data[0];
  console.log("dale2", inscrito);
  try {
    const email = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/api/email`, {
      method: "POST",
      body: JSON.stringify({
        name: inscrito.name,
        cpf: inscrito.cpf,
        email: inscrito.email,
        kids: paymentData[0].kids,
        adultos: paymentData[0].adults,
        price: paymentData[0].price,
        id: `${inscrito.id}`
      })
    });
    await email.json();
  } catch (err) {
    console.log("dale3", err)
    res.status(500).json(err);
    return;
  }


  const { data: data2, error: error2 } = await supabase
    .from('inscritos')
    .update({ sent_email: true })
    .eq('id', inscrito.id)

  if (error2) {
    res.status(500).json(error2);
  } else {
    res.status(200).json(inscrito);
  }
}