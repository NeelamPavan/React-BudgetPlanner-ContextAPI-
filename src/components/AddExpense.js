import React,{useContext, useState} from "react";
import { AppContext } from "./AppContext";
import {v4 as uuidv4} from 'uuid';
const AddExpense=()=>
{
    const {dispatch}=useContext(AppContext)
    const[name,setName]=useState('');
    const[cost,setCost]=useState('');
    const onSubmit=(event)=>
    {
        event.preventDefault();
      const expensess={
        id:uuidv4(),
        name:name,
        cost:parseInt(cost)
      };
      dispatch({type:'ADD_EXPENSE',
    payload:expensess})
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input type='text' required='required' className="form-control" id='name' value={name} onChange={(event)=>setName(event.target.value)}></input>
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input type='text' required='required' className="form-control" id='cost'value={cost} onChange={(event)=>setCost(event.target.value)}></input>
                </div>
                <div className="col-sm">
                    <button type='submit' className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    )
}
export default AddExpense