
import React, { useState, useContext } from 'react';
import './App.css';
import {TransactionContext} from './Context';

function Child() {
    let { transactions, addTransaction, delTransaction} = useContext(TransactionContext);
    //console.log(transactions);
    const [Amount, setAmount] = useState('');
    const [Name, setName] = useState('');
    function getIncome() {
        let Income = 0;
        for (var i = 0; i < transactions.history.length; i++) {
            if (Number(transactions.history[i].amount) > 0) {
                Income += Number(transactions.history[i].amount);
            }
        }
        return Income;
    }
    function getExpense() {
        let expense = 0;
        for (var i = 0; i < transactions.history.length; i++) {
            if (Number(transactions.history[i].amount) < 0) {
                expense += Number(transactions.history[i].amount);
            }
        }
        return expense;
    }
    const submit = (e) => {
       e.preventDefault();
        if (Amount && Name) {
                addTransaction({ Amount, Name, id: Math.random() });
            }
          else {
            console.log("Fill the fields");
        }
        setAmount('');
        setName('');
    }
    
    return (
        <div id='expense-app'>
            <h1 className='heading'>Expense Tracker</h1>
            <hr/>
            <div id = 'balance'>
                <h2>Balance: </h2><h2>{getIncome() + getExpense()}</h2>
            </div>
            <div id='income-expense'>
                <h2 id='income'>Income:<br /><br />{getIncome()}</h2>
                <h2 id = 'expense'>Expense:<br /><br />{getExpense()}</h2>
            </div>
            <br />
            <hr/>
            <div>
                <h2 className='heading'>History</h2>
                <ul className='itemsList'>
                    {
                        transactions.history.map((val) => {
                            //console.log(val);
                            const { amount, name, id } = val;
                            return (
                                <li key={id}>
                                    <span>{name}</span>
                                    <span>{amount}</span>
                                    <button onClick={() => delTransaction(id)}>remove</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <hr/>
            <div id='Trans-Details'>
                <h2>Transactions:</h2>
                <form id='transaction'>
                    <h4>
                        Expense: -Negative | | Income: +Positive
                        <input type='Number' placeholder='Add Amount' value={Amount} onChange={(e) => setAmount(e.target.value)} />
                    </h4>

                    <input type='text' placeholder='Add Transaction Name' value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type='submit' value='Add Transaction' onClick={submit} />
                </form>
              
            </div>
            <br />
            <hr/>
          
        </div>
    );
}

export default Child;