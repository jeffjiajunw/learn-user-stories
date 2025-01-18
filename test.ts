import { Bank } from "./bank";

const accounts = [{ id: 1234567890, balance: 5000 },
{ id: 1234567891, balance: 10000 }];

const usernames = ['user1', 'user2'];

const bank = new Bank(accounts, usernames);

// Scenario 1: successful account created
const acc = bank.createAccount('user1', 20, 1234567892);
if (acc.id !== 1234567892
    || acc.balance !== 0
    || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    bank.createAccount('user1', 20, 1234567892);
    console.log('Scenario 1 failed');
}
catch(e) {
    console.log('Scenario 1 passed');
}

// scenario 2: unsuccessful account creation due to customer being below 18

try {
    bank.createAccount('user1', 17, 1234567899);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: unsuccessful account creation due to invalid username

try {
    bank.createAccount('user3', 20, 1234567888);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}

// Scenario 4: unsuccessful account deposit due to invalid amount

try {
    bank.depositMoney(1234567890, 0)
    console.log('Scenario 4 failed');
}
catch(e) {
    console.log('Scenario 4 passed');
}

// Scenario 5: unsuccessful deposit due to invalid account number

try {
    bank.depositMoney(123456788, 100)
    console.log('Scenario 5 failed');
}
catch(e) {
    console.log('Scenario 5 passed');
}

// Scenario 6: successful account deposit

try {
    bank.depositMoney(1234567890, 100)
    console.log('Scenario 6 passed');
}
catch(e) {
    console.log('Scenario 6 failed');
}

// Scenario 7: unsuccessful account widthdraw due to invalid amount

try {
    bank.withdrawMoney(1234567890, 0)
    console.log('Scenario 7 failed');
}
catch(e) {
    console.log('Scenario 7 passed');
}

// Scenario 8: unsuccessful withdraw due to invalid account number

try {
    bank.withdrawMoney(123456788, 100)
    console.log('Scenario 8 failed');
}
catch(e) {
    console.log('Scenario 8 passed');
}

// Scenario 9: successful account withdraw

try {
    bank.withdrawMoney(1234567890, 100)
    console.log('Scenario 9 passed');
}
catch(e) {
    console.log('Scenario 9 failed');
}

// Scenario 10: unsuccessful withdraw due to insufficient balance

try {
    bank.withdrawMoney(123456790, 100000)
    console.log('Scenario 10 failed');
}
catch(e) {
    console.log('Scenario 10 passed');
}

// Scenario 11: successful account check balance

try {
    bank.check(1234567890)
    console.log('Scenario 11 passed');
}
catch(e) {
    console.log('Scenario 11 failed');
}

// Scenario 11: unsuccessful account check balance

try {
    bank.check(123456789)
    console.log('Scenario 12 failed');
}
catch(e) {
    console.log('Scenario 12 passed');
}