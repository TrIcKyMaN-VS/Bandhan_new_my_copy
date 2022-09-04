const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Razorpay = require('razorpay');
const auth = require("../middleware/auth");
const { PaymentDhoom } = require("../model/paymentmodel");
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



router.get("/details", (req,res) => {
  res.status(200).send("req receiveds")
})

  
  router.get('/get-razorpay-key', (req, res) => {
      res.send({ key: process.env.RAZORPAY_KEY_ID });
    });
    
    router.post('/create-order', async (req, res) => {
      console.log(process.env.RAZORPAY_KEY_ID);
    console.log("rec rec");
    try {
      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
      });
      const options = {
        amount: req.body.amount,
        currency: 'INR',
      };
      const order = await instance.orders.create(options);
      if (!order) return res.status(500).send('Some error occured');
      res.send(order);
      console.log(order);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  });
  
  router.post('/pay-order', async (req, res) => {
    // console.log(req.body)
    try {
      const { orderId, amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
        req.body;
      const newPaymentDhoom = PaymentDhoom({
        isPaid: true,
        amount: amount / 100,
        orderId, 
        razorpay: {
          orderId: razorpayOrderId,
          paymentId: razorpayPaymentId,
          signature: razorpaySignature,
        },
      });
      await newPaymentDhoom.save();
      res.send({
        msg: 'Payment was successfull',
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });


module.exports = router;