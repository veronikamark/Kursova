// server/api/newVisit.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://markevicv124:6kXSywmhGfzOBV8j@kursova.4j7znfn.mongodb.net/';
const client = new MongoClient(uri);

export default defineEventHandler(async (event) => {
  // Connect to the database
  await client.connect();
  const database = client.db('Cosmetology');
  const patientsCollection = database.collection('Patient');
  
  // Parse the JSON body
  const newPatientData = await readBody(event);

  try {
    // Insert the new visit data into the collection
    const result = await patientsCollection.insertOne(newPatientData);
    
    // Close the connection
    await client.close();

    // Return the result
    return {
      statusCode: 201,
      body: { message: 'Visit created successfully', patientId: result.insertedId },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  } catch (error) {
    // Close the connection in case of error
    await client.close();

    // Return the error
    return {
      statusCode: 500,
      body: { message: 'Failed to create visit', error: error.message },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
});