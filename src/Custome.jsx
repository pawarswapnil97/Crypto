import {useState} from 'react'
function CustomeHook(){
  const[count,setCount]=useState(0);
  const handlehooks=()=>{
    setCount(count+1);
  }

  const[deccount,setdeccount]=useState(100);
  const handlehooksdec=()=>{
    setdeccount(deccount-1);
  }
  return {
    count,
    handlehooks,
    deccount,
    handlehooksdec
  }
}

export default CustomeHook;