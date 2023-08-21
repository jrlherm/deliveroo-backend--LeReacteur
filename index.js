const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const apiUrl =
      "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/paris/3eme-temple/sub-arc-subway-rambuteau?day=today&geohash=u09wj8rk5bqr&time=ASAP";

    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGI0ZjQ1NDA4ZTkxMjBjZGY4MGFhNTEiLCJlbWFpbCI6ImxoZXJtLmplYW5yZW5lQGdtYWlsLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyMy0xMi0yMlQwMTowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNjkyNjE2NTIwfQ.xxxjEL5Fr4pnTu9emXy7LOneti98vWOEalsgAWao5E4";

    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    const responseData = response.data;
    return res.json(responseData);
  } catch (error) {
    console.error("Error with API:", error);
    return res.status(500).json({ error: "An error occurred" });
  }
});

// Northflank va nous fournir une variable process.env.PORT
// if (process.env.PORT) {
//   app.listen(process.env.PORT, () => {
//     console.log("Server started");
//   });
// } else {
//   app.listen(3200, () => {
//     console.log("Server started");
//   });
// }

app.listen(process.env.PORT || 3200, () => {
  console.log("Server started");
});
