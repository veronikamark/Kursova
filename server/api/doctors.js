import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://markevicv124:6kXSywmhGfzOBV8j@kursova.4j7znfn.mongodb.net/';
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
  await client.connect();
  const database = client.db('Cosmetology');
  const doctorsCollection = database.collection('Doctor');

  // Retrieve the entire document for the current
  const document = await doctorsCollection.find({}).toArray();
  await client.close();

  return {
    statusCode: 200,
    body: document, // Send the extracted JSON data for the next 14 days
    headers: {
      'Content-Type': 'application/json',
    },
  };
});