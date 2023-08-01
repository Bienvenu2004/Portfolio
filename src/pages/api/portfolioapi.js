// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from "cors";

import clientPromise from "@/lib/mongodb";

import initMiddleware from "@/lib/initMiddleware";

const database = "Portfolio";

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        origin: "*", // allow to server to accept request from different origin
        methods: ["POST", "GET"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true, // allow session cookie from browser to pass through
    })
);

export const insertDocument = async (client, collection, document) => {
    const db = await client.db(database);

    const result = await db.collection(collection).insertMany(document, {
        ordered: true,
    });

    return await result;
};

export const getAllDocuments = async (_client = null, collection = null) => {
    const client = _client ? _client : await clientPromise;
    const db = await client.db(database);

    const documents = await db.collection(collection).find({}).toArray();

    return await documents;
};

export default async function handler(req, res) {
    await cors(req, res);
    const client = await clientPromise;
    let documents = [];
    const { collection, document } = req.body;
    const { getCollection } = req.query;

    switch (req.method) {
        case "POST":
            //insert document
            documents = await insertDocument(client, collection, document);
            res.status(200).json({ documents });
            break;

        case "GET":
            //retrieve documents
            documents = await getAllDocuments(client, getCollection);
            res.status(200).json({ documents });
            break;
        default:
            res.setHeader("Allow", ["GET", "PUT"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
