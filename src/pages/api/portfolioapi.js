// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors"
import { connectDatabase ,insertDocument, getAllDocuments } from "@/lib/mongodb"
import initMiddleware from "@/lib/initMiddleware"


// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        origin: '*', // allow to server to accept request from different origin
        methods: ['POST', 'GET'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true, // allow session cookie from browser to pass through
    })
);


export default async function handler(req, res) {

    await cors(req, res)
    
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
