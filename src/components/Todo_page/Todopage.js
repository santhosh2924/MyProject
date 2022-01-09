import './todo.css';
import { useState } from 'react';

function Todo() {
  const [text,setText] = useState("")
  const [state, setstate] = useState("")
  const [total,settotal]=useState([])
  
 const Updateday =(e)=>{
   setText(e.target.value)
 }

 const Updatefood =(e)=>{
  setstate(e.target.value)
}

const handleadd=()=>{
  const data={
    day:text,
    food:state
  }
  settotal([...total,data])
  console.log(total);
  cleardata();
  
}
const cleardata=()=>{
  setText("")
  setstate("")
}
const handledelete=(num)=>{
  const copytotal=[...total]
  copytotal.splice(num,1)
settotal(copytotal)
console.log(copytotal);
}
const handlereset=()=>{
  settotal([])
}
  return (
    <div className="App">
        <div className='todo_subcontainer' >
            <div><h1>Todolist</h1></div>
            <div className='input_todocontainer' >
            <div >
            <input type="text"  className='in' placeholder='Enter your Day' onChange={Updateday} value={text}></input>
            </div>
            <div>
            <input type="text" className='in' placeholder='Enter your Food' onChange={Updatefood} value={state}></input>
            </div>
            </div>
            <div className='Buttons'>
            <button className='Button' onClick={handleadd} > Add </button>
            <button className='Button' onClick={handlereset}>  Reset </button>
            </div>
            <div className='table'>
        <div>
            {
                total[0]?  <table>
                <thead>
                <tr>
                    <th>slno</th>
                    <th>days</th>
                    <th>foods</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                {
                    total.map((value,index)=>{
                    return <tr>
                        <td>{index+1}</td>
                        <td>{value.day}</td>
                        <td>{value.food}</td>
                        <td><button onClick={()=>handledelete(index)}>delete</button></td>
                    </tr>
                    })
                }
                </tbody>
            </table>
            :<div className='nodata' >
                <div className='line' ></div>
                <div>no data</div>
                <div className='line' ></div>
                </div>
            }
       </div>
        </div>

     
      
     
        </div>
    </div>
  );
}

export default Todo;
