"use strict";
/** Undestanding the problem statement
 * Bank needs to automate the incoming transactions (deposit, withdrawl and transfer).
 * 1 Indexed accounts array meaning no 0 Index when accessing the accounts Index starts from 1.
 * 0 Indexed integer array meaning Index starts from 0 this has all the balances of all the accounts.
 * (i+1)th account has balance of balance[i] - meaning account[i+1] = balance[i] when i=0 account[1] = balance[0];
 * accounts = [1,2,3], balances = [10, 20, 30, 40] and withdraw = [3, 10] account = 3, amount = 10, i=1 account[i+1] = balances[i] mapping = {account: 3, balance: 0}
 */
