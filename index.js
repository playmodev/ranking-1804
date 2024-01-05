'use strict';

const BASE_URL = process.env.BASE_URL
const TOKEN = process.env.TOKEN

const getRanking = () => {
  const url = `${BASE_URL}/ranking?_tl=${TOKEN}`
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
}

module.exports.api = (event, context, callback) => {
  getRanking()
    .then(
      payload => {
        const response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify(payload)
        }

        callback(null, response)
      }
    )
    .catch(callback)
};
