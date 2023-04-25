import axios from "axios";

const getAllDocuments = async (collection) => {
    const data = await axios
        .get(
            `http://localhost:${process.env.PORT}/api/portfolioapi?getCollection=${collection}`
        )
        .catch((error) => {
            if (axios.isCancel(error)) {
                return { isCancelled: true, documents: [] };
            }
            return { isCancelled: false, error: error };
        });
    return data;
};

const insertDocuments = async (collection, document) => {
    const data = await axios
        .post(`http://localhost:${process.env.PORT}/api/portfolioapi`, {
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
