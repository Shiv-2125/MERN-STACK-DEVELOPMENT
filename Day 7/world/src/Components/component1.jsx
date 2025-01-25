import React, { useState } from 'react';

function composition () {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setres] = useState(0);
  
  // Add the two numbers
  const storenum1 = (e)=>{
    setNum1(parseFloat(e.target.value));
    console.log(num1);
    }
  const storenum2 = (e)=>{
    setNum2(parseFloat(e.target.value));
    console.log(num2);
    }
    const add = (e)=>{
        var c= num1+num2;
        setres(c);
    }
}
    return{
        <h1>
        <h1>Simple Calculator</h1>
        <form>
    <input type='number' id='num1' placeholder= 'enter number' onChange={storenum1}/>
    <br/>
    <input type='number' placeholder= 'enter number' onChange={storenum2}/>
    <br/>
    <input type='button' value='ADD' onClick={Addition}/>
    <input type='button' value='SUB'/>
    <input type='button' value='MUL'/>
    <input type='button' value='DIV'/>
    </form>
    <h1>Result: {res}</h1>
    </>

    }

export default composition;
// In the above snippet, the import statement is commented out. This is because the import statement is not required in the component1.jsx file.
// The import statement is required only in the component2.jsx file.
// The import statement is used to import the useState hook from the react module.
// The useState hook is used to create a state variable in the component.
v –––
–––––––  