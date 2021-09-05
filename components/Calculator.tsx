import type { NextPage } from 'next'
import {useState} from 'react'

import ButtonCalculator from './buttons/ButtonCalculator'
import FormCalculator from './inputs/FormCalculator'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBackspace 
} from "@fortawesome/free-solid-svg-icons";

const Calculator: NextPage = () => {
  const [result, setResult] = useState("")

  const handleNumber = (value: string) => {
    setResult((result.toLowerCase() === "error") ? "".concat(value) : result.concat(value))
  }

  const handleDelete = () => {
    setResult(result.slice(0, result.length - 1))
  }

  const handleClear = () => {
    setResult("") 
  }

  const Calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch(error) {
      setResult("Error")
    }
  }

  return (
    <section id="calculator" className="container">
      <div className="row">
        <div className="col-8">
          <FormCalculator result={result}/>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <ButtonCalculator value="*" clickHandler={handleNumber}>&#215;</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="/" clickHandler={handleNumber}>&#247;</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="1" clickHandler={handleClear}>C</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="1" clickHandler={handleDelete}><FontAwesomeIcon icon={faBackspace} style={{width: '24px', height: '24px'}}/></ButtonCalculator>
        </div>
      </div>      

      <div className="row">
        <div className="col-2">
          <ButtonCalculator value="7" clickHandler={handleNumber}>7</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="8" clickHandler={handleNumber}>8</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="9" clickHandler={handleNumber}>9</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="+" clickHandler={handleNumber}>&#43;</ButtonCalculator>
        </div>
      </div>     

      <div className="row">
        <div className="col-2">
          <ButtonCalculator value="4" clickHandler={handleNumber}>4</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="5" clickHandler={handleNumber}>5</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="6" clickHandler={handleNumber}>6</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="-" clickHandler={handleNumber}>&#8211;</ButtonCalculator>
        </div>
      </div>      

      <div className="row">
        <div className="col-2">
          <ButtonCalculator value="1" clickHandler={handleNumber}>1</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="2" clickHandler={handleNumber}>2</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="3" clickHandler={handleNumber}>3</ButtonCalculator>
        </div>
        <div className="col-2">
          <ButtonCalculator value="1" clickHandler={Calculate}>&#61;</ButtonCalculator>
        </div>
      </div>  

      <div className="row">
        <div className="col-4">
          <ButtonCalculator value="1" clickHandler={handleNumber}>Save</ButtonCalculator>
        </div>
        <div className="col-4">
          <ButtonCalculator value="1" clickHandler={handleNumber}>Read</ButtonCalculator>
        </div>
      </div>     
    </section>
  )
}

export default Calculator