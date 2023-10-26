import React, { useState } from 'react'

function Dhasboard() {
    const [data,setData]=useState([]);
    const [inputvalue,setInputvalue]=useState('');
    const [editindex,setEditindex]=useState(null);
const addData=()=>{
    if(inputvalue.trim()===""){
        return "nothing to show";

    }
    if(editindex !==null){

        const updateData=[...data];
        updateData[editindex]=inputvalue;
        setData(updateData);
        setEditindex(null)
    }else{


        setData([...data,inputvalue]);
    }
    setInputvalue("")
}
const editData=(index)=>{

    setInputvalue(data[index]);
    setEditindex(index);

    
}
const deleteItem=()=>{
    const updatData =data.filter((element,index)=>index !== index)
    setData(updatData);
}

  return (
    <>
    <div className='container'>
        <div>
        <h2>TO do</h2>
       <input 
        type="text"     
           value={inputvalue} 
          onChange={(e)=>{setInputvalue(e.target.value)}}       
         
          />
          <button onClick={addData}>{editindex!==null?"update":"Add"}</button>
    </div>
    <ol>
    {
        data.map((item,index)=>
        (
            <>
            <li key={index}>
                <h4>{item}</h4>
                <button onClick={()=>deleteItem(index)}>delete</button>
                <button onClick={()=>editData(index)}>edit</button>

            </li>
            </>
        )



        )
    }

    </ol>
    </div>
    </>
  )
}

export default Dhasboard
