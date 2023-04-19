// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDatabase ,insertDocument, getAllDocuments } from "@/lib/mongodb"


export default async function handler(req, res) {

    const client = await connectDatabase()
    let documents = []
    const {collection, document, sort} = req.body
    

    switch(req.method){
        case 'POST':
            //insert document
            documents = await insertDocument(client, collection, document)
            res.status(200).json({ documents })
            break

        case 'GET':
            //retrieve documents
            documents = await getAllDocuments(client, collection, sort)
            res.status(200).json({documents })
            break
        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }

}
