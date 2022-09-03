const mongoose = require('mongoose')
const PaymentSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    orderId: String,
    razorpay: {
      orderId: String,
      paymentId: String,
      signature: String,
    },
  });
  const PaymentDhoom = mongoose.model('PaymentDhoom', PaymentSchema);

  exports.PaymentDhoom = PaymentDhoom;