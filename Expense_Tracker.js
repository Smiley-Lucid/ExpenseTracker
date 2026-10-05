const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const pocketMoney = document.getElementById("pocket-money");   

let totalIncome = 5000;
let total = 0;

form.addEventListener("submit",function(event) {
    event.preventDefault();
    const expenseName = document.getElementById("expense").value;
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    total = total + amount;
    let remainingBalance = totalIncome - total;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${date}</td>
        <td>${expenseName}</td>
        <td>${category}</td>
        <td>${amount}</td>`;

    expenseList.appendChild(row);
    totalExpenses.textContent = "₹" + total;
    balance.textContent = "₹" + remainingBalance;

    form.reset();

});