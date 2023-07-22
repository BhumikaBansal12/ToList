import React, { useState } from 'react'

export default function TodoList() {
   const [activity, setActivity] = useState("");
   const [listData, setlistData] = useState([]);
   function addActivity(){
    //setlistData([...listData, activity])
    //console.log(listData) //will update data asychronously means will take time
     setlistData((listData)=>{
      const updatedList = [...listData, activity]
      console.log(updatedList)
      setActivity('');
      return updatedList
     }) 
  }
     function removeActivity(i){
      const updatedListData = listData.filter((elem, id)=>{
          return i!=id;
      })
      setlistData(updatedListData);
     }

return (
  <>
  <div className='container'>
      <div className='header'><u>TODO LIST</u></div>
      <input type='text' placeholder='Add Activity' className='activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
   <button onClick={addActivity}>Add</button>
   <p className='List-heading'>Here is you List :{")"}</p>
   {listData!=[] && listData.map((data, i)=>{
    return(
      <>
      <p key={i}>
        <div className='listData'>{data}</div>
         <div className='btn-position'><button onClick={()=>removeActivity(i)}>REMOVE</button></div>
      </p>
      </>
      )

    } ) }
   </div>
   </>
)
  }