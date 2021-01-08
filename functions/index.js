const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
    ('sk_test_51HugBDLB82DBdKHhgjbift3GNdbMcI9Q4NEdMfScVjJccS0rwVWk5mVhs32nGZ5yoBDfKNvLT7V527nuaR2g53JA00Q16A6dcz')


// API


//-App config
const app = express();


//--Middleware
app.use(cors({ origin: true }));
app.use(express.json());



//-API -routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment RequestRecieved BOOM!!', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });


    // ok created
    response.status(201).send({
        clientsecret: paymentIntent.client_secrte,
    })
})

//--Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-bb6ef/us-central1/api