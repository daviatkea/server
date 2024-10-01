exports.handler = async () => {
  const data = require("../../api/data.json");
  const artists = data.events;

  return {
    statusCode: 200,
    body: JSON.stringify(artists),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
};
