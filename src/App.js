import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spentsofar from './components/Spentsofar';
import Listitems from './components/Listitems';
import AddExpense from './components/AddExpense';
import { AppProvider } from './components/AppContext';
const App=()=>

{
  return (
    <AppProvider>
       <div className='container'>
      <h1 className='mt-3'>My Budget Planner</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <Spentsofar />
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'><Listitems /></div>
      </div>
      <h3 className='mt-3'>Add Expense</h3>
      <div className='row mt-3'>
        <div className='col-sm'><AddExpense/></div>
      </div>
    </div>
    </AppProvider>
   
  )
}
export default App