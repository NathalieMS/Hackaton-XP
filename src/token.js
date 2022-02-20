const request = require("request");


module.exports = {
    async createToken (){
        var options = {
            'method': 'POST',
            'url': 'https://openapi.xpi.com.br/oauth2/v1/access-token',
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
              'grant_type': 'client_credentials',
              'client_id': 'y28hfxmYS9wtwf7tYiz2H2vlrL8Oo9TW7gmw2jlrWzlAPINV',
              'client_secret': 'tSbmPZiwHxNkcT03JMkCOBN0b0its30hOwFujtD6PFtT8USashGM6l1utUcUULZn'
            }
          };
          return new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    const resultJson = JSON.parse(response.body)
                    resolve(resultJson.access_token);
              });
        })
    }
}