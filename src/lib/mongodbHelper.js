import axios from "axios"

const getAllDocuments = async (collection) => {
	const {data} = await axios.get(`/api/portfolioapi?getCollection=${collection}`)
	return data.documents
}

const insertDocument = async (collection, document) => {
	const {data} = await axios.post(`/api/portfolioapi`, {collection, document})
	return data.documents
}

export {getAllDocuments, insertDocument}

// Path: src/pages/api/portfolioapi.js
