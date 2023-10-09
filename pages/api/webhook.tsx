// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from "mercadopago";
import { createClient } from '@supabase/supabase-js';
import { sendEmail } from './email';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, { auth: { persistSession: false }});

const testEndpoint = async (data: any) => {
  fetch("https://eoukpp0g1g15gt3.m.pipedream.net", {
    method: "POST",
    body: data
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.body === "test") {
      await testEndpoint(JSON.stringify({ a: req.body, b: req.query, bd: typeof req.body }));
      res.status(200).json({success: true });
      return;
    }
  } catch (err) {
    console.log("err", err);
    res.status(500).json(err);
    return;
  }
  const id = req.body?.data?.id;  
  if (id === undefined) {
    await testEndpoint(JSON.stringify({ body: req.body }));
    res.status(200).json(req.body);
    return ;
  }
  const mercadoPago = await (await fetch(`https://api.mercadopago.com/v1/payments/${id}`, {
    headers: {
      authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  })).json();
  console.log(
    "dale",
    id, {
      name: mercadoPago.name,
      status: mercadoPago.status,
      id: mercadoPago.id,
      external_reference: mercadoPago.external_reference
    }
  );
  await testEndpoint(JSON.stringify({ id, mercadoPago }));
  if (mercadoPago.status !== "approved") {
    console.log("dale", "not paid")
    res.status(500).json("not paid");
    return;
  }
  const { data: paymentData, error: paymentError } = await supabase
    .from('payments')
    .update({ paid: true, method: mercadoPago.payment_method_id })
    .eq('id', +mercadoPago.external_reference)
    .select("*");

  if (paymentError || !paymentData || paymentData.length !== 1) {
    console.log("paymentError", { paymentError, paymentData })
    res.status(500).json({ paymentError, paymentData });
    return ;
  }
  
  const { data, error } = await supabase
    .from("inscritos")
    .select("*")
    .eq("id", paymentData[0].user_id);

  if (error || !data || data.length !== 1) {
    console.log("data error", { error, data })
    res.status(500).json({error, data});
    return;
  }
  const inscrito = data[0];
  if (inscrito.sent_email) {
    res.status(200).json({...inscrito, already_sent: true});
    return;
  }
  try {
    const email = await sendEmail({
      name: inscrito.name,
      cpf: inscrito.cpf,
      email: inscrito.email,
      kids: paymentData[0].kids,
      adultos: paymentData[0].adults,
      price: paymentData[0].price,
      id: `${inscrito.id}`,
      ticketType: inscrito.ticket_type
    });
    console.log("dale3", "success", email)
  } catch (err) {
    console.log("err3", err)
    res.status(500).json(err);
    return;
  }

  const { error: error2 } = await supabase
    .from('inscritos')
    .update({ sent_email: true })
    .eq('id', inscrito.id)

  if (error2) {
    console.log("error", error2);
    res.status(500).json(error2);
  } else {
    res.status(200).json(inscrito);
  }
}