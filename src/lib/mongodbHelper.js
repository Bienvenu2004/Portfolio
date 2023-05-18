import axios from "axios";
const SERVER = process.env.SERVER;

const getAllDocuments = (collection) => {
    const data = axios
        .get(`${SERVER}/api/portfolioapi?getCollection=${collection}`)
        .catch((error) => {
            if (axios.isCancel(error)) {
                return { isCancelled: true, documents: [] };
            }
            return { isCancelled: false, error: error };
        });
    return data;
};

const insertDocuments = (collection, document) => {
    const data = axios
        .post(`${SERVER}/api/portfolioapi`, {
            collection,
            document,
        })
        .catch((error) => {
            if (axios.isCancel(error)) {
                return { isCancelled: true, documents: [] };
            }
            return { isCancelled: false, error: error };
        });
    return data;
};

export { getAllDocuments, insertDocuments };

// Path: src/pages/api/portfolioapi.js
