import Stripe from 'stripe';
let stripe = Stripe('sk_test_51LcO4YJixNRK9OoBoWFMj2gmIyvXH0jjhcmKQhP4d6ITgIWohlGAUxAq8McZEl2RV5hB6tKzm5F2vGogXVlBAO3Q0029vr8feh');
export const Checkout = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.token.email,
      // email: "saad@gmail.com",
      source: req.body.token.id
    }).then((customer) => {
      return stripe.charges.create({
        amount: 1000,
        description: "Test Purchase using express and Node",
        currency: "USD",
        customer: customer.id,
      });
    }).catch(e => {
      console.error("Err ", e)
    })
      .then((charge) => {
        res.json({
          data: "success"
        })
      })
      .catch((err) => {
        res.json({
          data: err,
        });
      });
    return true;
  } catch (error) {
    return false;
  }
};