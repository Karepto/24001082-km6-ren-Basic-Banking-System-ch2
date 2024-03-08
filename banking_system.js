import BankAccount from './bank_account.js';

// const BankAccount = require('./bank_account');


const myAccount = new BankAccount(1000); // Saldo awal: 1000

function depositOperation() {
        myAccount.deposit();
        myAccount.updateTampilkanSaldo();
}


function withdrawOperation() {
        myAccount.withdraw();
        myAccount.updateTampilkanSaldo();
}

myAccount.updateTampilkanSaldo();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('depositBtn').addEventListener('click', depositOperation);
    document.getElementById('withdrawBtn').addEventListener('click', withdrawOperation);
});