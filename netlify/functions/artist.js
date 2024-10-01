exports.handler = async (event) => {
  const data = require("../../api/data.json");
  const id = event.queryStringParameters.id;

  const artist = data.artists.find((a) => a.id === parseInt(id));

  if (artist) {
    return {
      statusCode: 200,
      body: JSON.stringify(artist),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Artist ikke fundet" }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  }
};
