// Capturar el formulario y los elementos relevantes
const form = document.getElementById('calculator-form');
const billInput = document.getElementById('bill');
const tipSelect = document.getElementById('tip');
const resultDiv = document.getElementById('result');
const billAmountSpan = document.getElementById('bill-amount');
const tipPercentageSpan = document.getElementById('tip-percentage');
const tipAmountSpan = document.getElementById('tip-amount');
const totalAmountSpan = document.getElementById('total-amount');

// Escuchar el evento 'submit' del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  
  // Validar los valores ingresados
  const bill = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipSelect.value);
  
  if (isNaN(bill) || isNaN(tipPercentage) || bill <= 0) {
    alert('Por favor, ingresa valores numéricos válidos para el monto de la cuenta y el porcentaje de propina.');
    return;
  }
  
  // Calcular la propina y el monto total
  const tipAmount = bill * tipPercentage;
  const totalAmount = bill + tipAmount;
  
  // Mostrar los resultados
  billAmountSpan.textContent = bill.toFixed(2);
  tipPercentageSpan.textContent = (tipPercentage * 100).toFixed(0) + '%';
  tipAmountSpan.textContent = tipAmount.toFixed(2);
  totalAmountSpan.textContent = totalAmount.toFixed(2);
  
  resultDiv.classList.remove('hidden');
});

/* https://www.w3schools.com/jsref/dom_obj_event.asp
https://www.w3schools.com/jsref/dom_obj_event.asp
https://lenguajejs.com/javascript/dom/que-es/ */
