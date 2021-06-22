// var braintree = require("braintree");

// var gateway = braintree.connect({
//   environment: braintree.Environment.Sandbox,
//   merchantId: "useYourMerchantId",
//   publicKey: "useYourPublicKey",
//   privateKey: "useYourPrivateKey"
// });
const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "3p78czkvrpmk8zmp",
  publicKey:   "yk5rnt783ykbvwby",
  privateKey: "4e3a217f2b031ea57a6d258e7b3450c3"
});


exports.getToken = (req, res) => {
    gateway.clientToken.generate({
    
      }, function(err, response) {
          if(err){
              res.status(500).send(err);
          }else{
              res.send(response);
          }
      });
}

exports.processPayment = (req, res) =>{
    let nonceFromTheClient= req.body.paymentMethodNonce

    let amountFromTheClient= req.body.amount
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        
        options: {
          submitForSettlement: true
        }
      }, function(err, result) {
          if(err){
              res.status(500).json(error)
          }else{
              res.json(result);
          }
      });
}