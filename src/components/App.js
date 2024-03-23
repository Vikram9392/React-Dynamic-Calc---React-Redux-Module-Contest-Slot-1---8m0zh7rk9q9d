import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  let[result,setResult]=useState(0);
 let[num1,setnum1]=useState("");
 let[num2,setnum2]=useState("");


useEffect(() => {
  setResult(Number(num1)+Number(num2));
})

  //setResult(a+b);

  return (
    <div id="main">
      <input id='input1' onChange={(event)=>
          setnum1(event.target.value)
      }/>
       +
      <input id='input2' onChange={(event)=>
        setnum2(event.target.value)
      }/> 
      
      <p id='result'>{result}</p>
    </div>
  )
}


export default App;
