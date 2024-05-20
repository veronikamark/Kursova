import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://markevicv124:6kXSywmhGfzOBV8j@kursova.4j7znfn.mongodb.net/';
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
    const { departmentID } = getQuery(event);
    
    try {
        await client.connect();
        const database = client.db('Cosmetology');
        const doctorsCollection = database.collection('Doctor');

        // Construct query object based on name and lastName parameters
        const query = {};
        if (departmentID) query['DepartmentID'] = parseInt(departmentID);

        // Retrieve the documents matching the query
        const documents = await doctorsCollection.find(query).toArray();
        await client.close();

        return {
            statusCode: 200,
            body: documents,
            headers: {
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        console.error('Error occurred:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    }
});