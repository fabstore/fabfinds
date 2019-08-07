const applicationId = "sandbox-sq0idp-hU49PzIu_4jxu-9agRAOpQ";

function onGetCardNonce(event) {
  event.preventDefault();
  paymentForm.requestCardNonce();
}

const paymentForm = new SqPaymentForm({
  applicationId: applicationId,
  inputClass: 'sq-input',
  inputStyles: [{
    fontSize: '16px',
        lineHeight: '24px',
        padding: '16px',
        placeholderColor: '#a0a0a0',
        backgroundColor: 'transparent',
  }],
  cardNumber: {
    elementId: 'sq-card-number',
        placeholder: 'Card Number'
  },
  cvv: {

        elementId: 'sq-cvv',
        placeholder: 'CVV'
  },
  expirationDate: {

        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
  },
  postalCode: {

        elementId: 'sq-postal-code',
        placeholder: 'Postal'
  },
  callbacks: {
    cardNonceResponseReceived: function (errors, nonce, cardData) {

          if (errors) {
	    console.error('Encountered errors:');
	          errors.forEach(function (error) {

		                console.error('  ' + error.message);
		  });
	    alert('Encountered errors, check browser developer console for more details');
	    return;
	        }
      alert(`The generated nonce is:\n${nonce}`);
    }
  }
});
