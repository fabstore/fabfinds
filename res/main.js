window.addEventListener('DOMContentLoaded', (event) => {

  var content = '<div id="form-container">' +
    '<div id="sq-ccbox">' +
    '<form id="nonce-form" novalidate action="process-payment" method="post">' +
    '<fieldset>' +
    '<div id="sq-card-number"></div>' +
    '<div class="third">' +
    '<div id="sq-expiration-date"></div>' +
    '</div>' +
    '<div class="third">' +
    '<div id="sq-cvv"></div>' +
    '</div>' +
    '<div class="third">' +
    '<div id="sq-postal-code"></div>' +
    '</div>' +
    '</fieldset>' +
    '<button id="sq-creditcard" class="button-credit-card" onclick="onGetCardNonce(event)">Pay $1.00</button>' +
    '<input type="hidden" id="card-nonce" name="nonce">' +
    '</form>' +
    '</div>' +
    '</div>';

  // document.getElementsByTagName('body')[0].innerHTML = content;
  window.addEventListener('popstate', function(e) {

  });

  //https://api.github.com/repos/testacc01/testrepo01/contents/test.txt


  async function getrepos(){
    const url = "https://api.github.com/repos/rflc/bots/contents/aux.py";
    const response = await fetch(url);
    const res = await response.json();
    console.log(res.sha);
  }

  getrepos();

});

