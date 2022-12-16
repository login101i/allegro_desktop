const express = require('express');
const router = express.Router();

const { createPaymentIntent } = require('../controllers/stripeController');
// const { route } = require('./user');
// middleware
const { isAuthenticatedUser } = require('../middlewares/auth');

router.post('/create-payment-intent', isAuthenticatedUser, createPaymentIntent);

module.exports = router;
