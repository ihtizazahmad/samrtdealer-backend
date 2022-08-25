import Stripe from 'stripe';

const stripe =new Stripe('sk_test_51LZU5UJlq5utAynu2ALdxK6QSOhD0QnqJqvUeYfizgNixLydBtDfUcQV8tPyGfKU92DsQi96y8o6lEeQYFWFI78a00Y6BvXkhs');
//stripe for payment
export const Checkout= async(req, res) => {
    try {
        console.log(req.body);
        token = req.body.token
      const customer =await Stripe.customers
        .create({
          email: "saadk6401@gmail.com",
          source: token.id
        })
        .then(customer => {
          console.log(customer);
          return  stripe.charges.create({
            amount: 1000,
            description: "Test Purchase using express and Node",
            currency: "USD",
            customer: customer.id,
          });
        })
        .then((charge) => {
          console.log(charge);
            res.json({
              data:"success"
          })
        })
        .catch((err) => {
            res.json({
              data: "failure",
            });
        });
      return true;
    } catch (error) {
      return false;
    }
}