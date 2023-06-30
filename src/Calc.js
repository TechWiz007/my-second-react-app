import React,{useState} from 'react';
import './Calc.css';

function Calc() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  function handleInput(value) {
    setInput(input + value);
  } 

    return (
        <>
          <h1>Calculator</h1>
          <input class="input_field" type="text" value={input}/>
          <input class="result_field" type="text" value={result}/>
          <button class="one" type="button" onClick={()=>handleInput('1')}>1</button>
          <button class="two" type="button" onClick={()=>handleInput('2')}>2</button>
          <button class="three" type="button" onClick={()=>handleInput('3')}>3</button>
          <button class="four" type="button" onClick={()=>handleInput('4')}>4</button>
          <button class="five" type="button" onClick={()=>handleInput('5')}>5</button>
          <button class="six" type="button" onClick={()=>handleInput('6')}>6</button>
          <button class="seven" type="button" onClick={()=>handleInput('7')}>7</button>
          <button class="eight" type="button" onClick={()=>handleInput('8')}>8</button>
          <button class="nine" type="button" onClick={()=>handleInput('9')}>9</button>
          <button class="zero" type="button" onClick={()=>handleInput('0')}>0</button>
          <button class="point" type="button" onClick={()=>handleInput('.')}>.</button>
          <button class="plus" type="button" onClick={()=>handleInput('+')}>+</button>
          <button class="minus" type="button" onClick={()=>handleInput('-')}>-</button>
          <button class="multiply" type="button" onClick={()=>handleInput('*')}>*</button>
          <button class="divide" type="button" onClick={()=>handleInput('/')}>/</button>
          <button class="modulus" type="button" onClick={()=>handleInput('%')}>%</button>
          <button class="equals" type="button" onClick={()=>setResult(eval(input))}>=</button>
          <button class="clear_input" type="button" onClick={()=>setInput(' ')}>CI</button>  
          <button class="clear_result" type="button" onClick={()=>setResult(' ')}>CR</button>
        </>
    );
}

export default Calc;