import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const database = "Portfolio"

if (!MONGODB_URI) {
	throw new Error(
		"Please define the MONGODB_URI environment variable inside .env.local"
	);
}

const client = new MongoClient(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export async function connectDatabase() {
	if (!client.isConnected()) await client.connect();
	return client;
}

export async function insertDocument(client, collection, document) {
	const db = client.db(database);

	const result = await db.collection(collection).insertOne(document);

	return result;
}

export async function getAllDocuments(client, collection, sort) {
	const db = client.db(database);

	const documents = await db
		.collection(collection)
		.find()
		.sort(sort)
		.toArray();

	return documents;
}
