//domain/.netlify/functions/1-hello

const inform = {
  greeting: "Hello, World!",
  msg: "This is my first Netlify Serverless Function!",
};

exports.handler = async (event, context, cb) => {
  return {
    headers: { "Access-Control-Allow-Origin": "*" },
    statusCode: 200,
    body: JSON.stringify(inform),
  };
};
