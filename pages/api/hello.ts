// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import mercadopago from "mercadopago";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("dale", req.body);
  const [ items, name, email, id ] = JSON.parse(req.body);
  mercadopago.configure(process.env.IS_PROD === "true" ? {
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.CLIENT_SECRET!
  } : {
    access_token: process.env.TEST_ACCESS_TOKEN!
  });
  
  const response = await mercadopago
    .preferences
    .create({ 
      items,
      payer: {
        name,
        email
      },
      external_reference: id,
      back_urls: {
        success: `${process.env.REACT_PUBLIC_ENDPOINT!}/success`
      },
      auto_return: "approved",
      notification_url: "https://069f-179-125-130-46.ngrok-free.app/api/webhook/"
    });

  res.status(200).json({ ...response.body })
}