const request = require("request");
const ModelSoma = require("../model/model")

const {createToken} = require ("../token.js")

module.exports = {
    async checkingAccount (req, res){
        console.log(req.body);
        let { user, bank } = req.body
        const token = await createToken()
        console.log(token)
        var options = {
            'method': 'GET',
            'url': `https://openapi.xpi.com.br/openbanking/bank/${bank}/users/${user}/checking-account`,
            'headers': {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
          };
          const promise = new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    resolve(response.body);
              });
        })
        const p = await promise;

        const newModelSoma = new ModelSoma(JSON.parse(p))

        return res.status(200).send(newModelSoma);
    }
}