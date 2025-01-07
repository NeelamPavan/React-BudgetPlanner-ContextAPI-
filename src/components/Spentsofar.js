import React,{useContext} from 'react'
import { AppContext } from './AppContext'
const Spentsofar=()=>
{
    const{expenses}=useContext(AppContext)
    const totalex=expenses.reduce((total,item)=>
    {
        return (total+=item.cost);
    },0)
    return(
<div className='alert alert-primary'>
    <span>Spent so far :${totalex}</span>
</div>
    )
}
export default Spentsofar