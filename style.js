const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  //fetching the api
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      const rate = data.rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', function() {
  const temp = currencyEl_one.value;

  currencyEl_one.value = currencyEl_two.value;

  currencyEl_two.value = temp;
  calculate();
});

calculate();

<!--Start of Tawk.to Script-->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66040cd8a0c6737bd125672c/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
<!--End of Tawk.to Script-->
