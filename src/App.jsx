import '../styles.css'
import { Button } from './components/Button'
import { Substract } from './components/operators/Substraction'
import { Add } from './components/operators/Addition'
import { Multiply } from './components/operators/Multiplication'
import { Delete } from './components/operators/Delete'
import { Clear } from './components/operators/Clear'
import { Split } from './components/operators/Division'
import { Equal } from './components/operators/Equal'
import { useState } from 'react'
import { useEffect } from 'react'

export function App () {
    //USE STATE SECTION
    const [operator, setOperator] = useState(undefined)
    const [output, setOutput] = useState([])
    const [firstNumber, setFirstNumber] = useState(undefined)
    const [secondNumber, setSecondNumber] = useState(undefined)
    const [result, setResult] = useState(false)

    //USE EFFECT SECTION
    useEffect(()=> {
        result && (
            firstNumber != undefined && (
                secondNumber != undefined ? setOutput(isNaN(operations[operator]) ? "Syntax Error" : operations[operator]) : (!operator ? setOutput([firstNumber]) : setOutput("Syntax Error")),
                setFirstNumber(undefined),
                setSecondNumber(undefined),
                setOperator(undefined)
            ),
            setResult(false)
        )
    }, [result])

    //FUNCTIONS SECTION
    const printNumber = (entry) => {
        let newOutput

        typeof output == 'number' 
        ? (newOutput = [], clearAll())
        : newOutput = [...output]

        if (newOutput.length == 1 && newOutput[0] === 0 && entry === 0) return
        newOutput.push(entry)
        setOutput(newOutput)

        //SETTING 2ND NUMBER IF EXIST A FIRST ONE
        firstNumber != undefined && assignSecondNum(newOutput)
    }
    const clearAll = () => {
        setFirstNumber(undefined)
        setOperator(undefined)
        setOutput([])
        setSecondNumber(undefined)
        setResult(false)
    }
    const deleteNumber = () => {
        const newOutput = typeof output == 'number' ? output.toString().split("") : [...output]
        newOutput.pop()
        setOutput(newOutput)
        
        if (secondNumber != undefined) {
            const newNumber = secondNumber
            setSecondNumber(parseFloat(newNumber.toString().slice(0, length-1)))
        }
    }
    const assignFirstNum = (symbol) => {
        const newOutput = typeof output == 'number' ? output : [...output]
        newOutput.length != 0 && (
            firstNumber == undefined ? (
                setFirstNumber(typeof newOutput == 'number' ? newOutput : () => parseFloat([...output].join(""))),
                setOutput([])
            )
            : (setFirstNumber(operations[operator]),
                setOutput([])
            )
        )
        setOperator(symbol)
    }
    const assignSecondNum = (newOutput) => {
        setSecondNumber(() => parseFloat(newOutput.join("")))
    }
    const assignResult = () => {
        setResult(true)
    }

    //VARIABLES & CONSTANTS SECTION
    let number = 1;
    const buttons = Array(18).fill(null)
    const operations = {
        "+": firstNumber+secondNumber,
        "-": firstNumber-secondNumber,
        "*": firstNumber*secondNumber,
        "/": firstNumber/secondNumber
    }
    const CONTENT = {
        0: <Clear key={0} clearAll={clearAll}/>,
        1: <Split key={1} setOperator={assignFirstNum} className={operator == '/' ? 'button symbol selected' : 'button symbol'}/>,
        2: <Multiply key={2} setOperator={assignFirstNum} className={operator == '*' ? 'button symbol selected' : 'button symbol'}/>,
        3: <Add key={3} setOperator={assignFirstNum} className={operator == '+' ? 'button symbol selected' : 'button symbol'}/>,
        7: <Substract key={7} setOperator={assignFirstNum} className={operator == '-' ? 'button symbol selected' : 'button symbol'}/>,
        11: <Button key= {11} className="button symbol" content="." handleClick={printNumber}/>,
        15: <Delete key={15} deleteNumber={deleteNumber}/>,
        17: <Equal key={17} setResult={assignResult}/>
    }

    //RENDER SECTION
    return (
        <section className='calculator'>
            <div className='output'>
                <span>{output}</span>
            </div>
            <section className='buttons'>
                {buttons.map((_,index) => {
                    return (
                        CONTENT[index] ? CONTENT[index] : <Button key= {index} className="button" content={number != 10 ? number++ : number = 0} handleClick={printNumber}/>
                    )
                })}
            </section>
        </section>
    )
}