window.addEventListener('DOMContentLoaded', (event) => {



  function checkout(item){
  var container = document.getElementById('container');
    console.log(item.childNodes[3].childNodes[3].dataset.price)
  container.innerHTML = 
    '<div id="form-container">' +
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
    '<button id="sq-creditcard" class="button-credit-card" onclick="onGetCardNonce(event)">Pay ' + item.childNodes[3].childNodes[3].dataset.price + '</button>' +
    '<input type="hidden" id="card-nonce" name="nonce">' +
    '</form>' +
    '</div>' +
    '</div>';
  }

  let elementsArray = document.querySelectorAll(".item");
  elementsArray.forEach(function(elem) {

  elem.addEventListener('click', function(e){

    checkout(e.currentTarget);
  });
  });

  // document.getElementsByTagName('body')[0].innerHTML = content;
  window.addEventListener('popstate', function(e) {

  });


// Get SHA from Github to replace file
  //https://api.github.com/repos/testacc01/testrepo01/contents/test.txt
/*

  async function getrepos(){
    const url = "https://api.github.com/repos/rflc/bots/contents/aux.py";
    const response = await fetch(url);
    const res = await response.json();
    console.log(res.sha);
  }

  getrepos();
*/
});
