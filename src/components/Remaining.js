import React,{useContext} from 'react'
import { AppContext } from './AppContext'
const Remaining=()=>
{
    const{expenses,budget}=useContext(AppContext)
    const total=expenses.reduce((total,item)=>{return (total=total+item.cost);},0);
    const alertt=total>budget?'alert-danger':'alert-success'
    return(
<div className={`alert ${alertt}`}>
    <span>Remaining :${budget-total}</span>
</div>
    )
}
export default Remaining