// get value function
function getInputValueById (id){
  return parseFloat(document.getElementById(id).value)
}
function showError(id){
  document.getElementById(id).classList.remove('hidden')
}
function formatCurrency (amount){
  return `${amount.toFixed(2)}`
}
function addToHistory(income,totalExpenses,balance){


  
}


// getting all the value

const calculateButton = document
  .getElementById("calculate")
  .addEventListener("click", function () {
    // const income = parseFloat(document.getElementById("income").value);
    // const software = parseFloat(document.getElementById("software").value);
    // const courses = parseFloat(document.getElementById("courses").value);
    // const internet = parseFloat(document.getElementById("internet").value);
    
    
    // get value from function
    const income = getInputValueById('income')
    const software = getInputValueById('software')
    const courses = getInputValueById('courses')
    const internet = getInputValueById('internet')




    if(income<= 0 || isNaN(income)){
      // document.getElementById('icome-error').classList.remove('hidden');
      showError('income-error')
      return
    }
    if(income<= 0 || isNaN(income)){
      // document.getElementById('icome-error').classList.remove('hidden');
      showError('software-error')
      return
    }

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    if(this.toggleAttribute > income){
      // document.getElementById('logic-error').classList.remove('hidden');
      showError('logic-error')
      return
    }

    const totalExpenseElement = document.getElementById("total-expenses");
    totalExpenseElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById("results");
    result.classList.remove("hidden");

    // history expenses

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-1-2 border-indigo-500";
    historyItem.innerHTML = `
     <p  class="text-xs text-gray-500"> ${new Date().toLocaleDateString()}</p>
     <p  class="text-xs text-gray-500">Income:$${formatCurrency(income)}
     <p  class="text-xs text-gray-500">Expenses:$${formatCurrency(totalExpenses)}
     <p  class="text-xs text-gray-500">Balance:$${balance.toFixed(2)}

    `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });

// savings of addEvenetlistener

const calculateSavingsButton = document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = parseFloat(document.getElementById("income").value);
    const software = parseFloat(document.getElementById("software").value);
    const courses = parseFloat(document.getElementById("courses").value);
    const internet = parseFloat(document.getElementById("internet").value);

    const savingPercentage = parseFloat(
      document.getElementById("savings").value
    );

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingPercentage * balance) / 100;

    const savingElement = document.getElementById("savings-amount");
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingBalance = balance - savingAmount;
    const remainingElement = document.getElementById("remaining-balance");
    remainingElement.innerText = remainingBalance.toFixed(2);
  });

//   history tab functionality

const historyTab = document.getElementById("history-tab");
const assistantTab = document.getElementById("assistant-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyTab.classList.remove("text-geay-600");
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add("text-gray-600");

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById('history-section').classList.remove('hidden')



 
});

assistantTab.addEventListener('click',function(){
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  )
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  )
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById('history-section').classList.add('hidden')
})

// live validation for input
// document.getElementById('income').addEventListener('input',function(){
//   const inputValue = parseFloat(document.getElementById('income').value)

//   if(isNaN(inputValue) || inputValue <= 0){
//     document.getElementById('icome-error').classList.remove('hidden');
//     return
//   }
// })

