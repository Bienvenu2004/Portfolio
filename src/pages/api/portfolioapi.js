// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDatabase ,insertDocument, getAllDocuments } from "@/lib/mongodb"


export default async function handler(req, res) {

  const client = await connectDatabase()

  if (req.method === 'POST'){
    const {collection, document} = req.body
    const documents = await insertDocument(client, collection, document)
    res.status(200).json({ documents })
  }

  if  (req.method === 'GET'){
    const {collection, sort} = req.body
    const documents = await getAllDocuments(client, collection, sort)
    res.status(200).json({documents })
  }

}
