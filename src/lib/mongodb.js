import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const database = "Portfolio"

if (!MONGODB_URI) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

const client = await MongoClient.connect(MONGODB_URI);

export async function connectDatabase() {
	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db(database);

	const result = await db.collection(collection).insertOne(document);

	return result;
}

export async function getAllDocuments(client, collection) {
	const db = client.db(database);

	const documents = await db
		.collection(collection)
		.find({})
		.toArray();

	return documents;
}
