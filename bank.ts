import { AccountType, BankType } from "./type";


/**
 * This class implements a bank that can
 * maintain accounts and create new accounts
 */

export class Bank implements BankType {
    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * The constructor initialized the bank with accounts and usernames
     * @param accounts - array of accounts
     * @param usernames - array of usernames
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * 
     * @param id - account id
     * @returns - true if account id ezists, false otherwise
     */
    private findAccountById(id: number): AccountType | undefined {
        return this.accounts.find(account => account.id === id);
    }

    private isAccountNumberInvalid(accountNumber: number): boolean {
        return accountNumber.toString().length !== 10;
    }

    private isUsernameExisits(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * 
     * @param username 
     * @param age 
     * @param accountNumber 
     * @returns a new account with a ten-digit unique id and zero balance
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if(this.isAccountNumberInvalid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if(!this.isUsernameExisits(username)) {
            throw new Error('User not found');
        }
        if(age < 18) {
            throw new Error('User is under 18');
        }
        if(this.findAccountById(accountNumber)) {
            throw new Error('Account already exists');
        }
        const account: AccountType = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(account);
        return account;
    }

    depositMoney(accountNumber: number, depositBalance: number) {
        let account = this.findAccountById(accountNumber)
        if (!account) {
            throw new Error("Account not found")
        }
        else if (depositBalance <= 0) {
            throw new Error("Deposit must be positive")
        }
        else {
            account.balance += depositBalance
        }
    }

    withdrawMoney(accountNumber: number, withdrawBalance: number) {
        let account = this.findAccountById(accountNumber)
        if (!account) {
            throw new Error("Account not found")
        }
        else if (withdrawBalance <= 0) {
            throw new Error("Deposit must be positive")
        }
        else if (withdrawBalance > account.balance) {
            throw new Error("Insufficient balance")
        }
        else {
            account.balance -= withdrawBalance
        }
    }

    check(accountNumber: number): number {
        let account = this.findAccountById(accountNumber)
        if (!account) {
            throw new Error("Account information wrong")
        }
        else {
            return account.balance
        }
    }
}
