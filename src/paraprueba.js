useEffect(() => {
  // generate the special stripe secret which allows us to charge a customer
  const getClientSecret = async () => {
    const response = await axios({
      method: "post",

      url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
    });
    setClientSecret(response.data.clientSecret);
  };

  getClientSecret();
}, [basket]);

console.log("THE SECRET IS >>>", clientSecret);

const handleSubmit = async (event) => {
  // do all the fancy stripe stuff...
  event.preventDefault();
  setProcessing(true);

  const payload = await stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })
    .then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      history.replace("/orders");
    });
};

const handleChange = (event) => {
  // Listen for changes in the CardElement
  // and display any errors as the customer types their card details
  setDisabled(event.empty);
  setError(event.error ? event.error.message : "");
};
