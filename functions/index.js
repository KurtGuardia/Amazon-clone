const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HS5wuDpeQG0ms9Mfm4Y5ApAAYfkIyltTkLxd1tuNIzyplbBnkX8QjQmTDzaON0rYCOn4x6jyi7saXBOB24Imhos0090WchBpX"
);

//API

//App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    ampunt: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoin
//http://localhost:5001/clone-e2ff6/us-central1/api
