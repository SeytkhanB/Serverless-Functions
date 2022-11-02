require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.REACT_AIRTABLE_API_KEY })
  .base(process.env.REACT_BASE_ID)
  .table("products");

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      const { id } = product;
      const { name, image, price, desc } = product.fields;
      const url = image[0].url;
      return { id, name, url, price, desc };
    });
    return {
      headers: { "Access-Control-Allow-Origin": "*" },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
