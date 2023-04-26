document.querySelector('#tip-form').onchange = function(){

  var bill = Number(document.getElementById('billTotal').value);
  var seats = Number(document.getElementById('seats').value);
  var tip = document.getElementById('tipInput').value;
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  var tax =  (8.875/100);
  var taxValue = bill * tax
  var tipValue = bill * (tip/100);
  var finalBill = bill + tipValue + taxValue;

  var splitEvenly = (finalBill/seats)

  console.log(finalBill);

  var taxTotal = document.querySelector('#tax');
  var tipAmount = document.querySelector('#tipAmount');
  var totalBillWithTipTax = document.querySelector('#totalBillWithTipTax');
  var splitBill = document.querySelector('#splitBill')

  tipAmount.value = tipValue.toFixed(2);
  totalBillWithTipTax.value = finalBill.toFixed(2);
  taxTotal.value = tax.toFixed(3)
  splitBill.value = splitEvenly.toFixed(2);

 //Show Results

  document.getElementById('results').style.display='block'
}