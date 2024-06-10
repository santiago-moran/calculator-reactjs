import '../styles.css'
import { Button } from './components/Button'
import { Substract } from './components/operators/Substraction'
import { Add } from './components/operators/Addition'
import { Multiply } from './components/operators/Multiplication'
import { Delete } from './components/operators/Delete'
import { Clear } from './components/operators/Clear'
import { Split } from './components/operators/Division'
import { Equal } from './components/operators/Equal'

export function App () {
    const buttons = Array(18).fill(null)
    const CONTENT = {
        0: <Clear key={0}/>,
        1: <Split key={1}/>,
        2: <Multiply key={2}/>,
        3: <Add key={3}/>,
        7: <Substract key={7}/>,
        11: <Button key= {11} className="button symbol" content="."/>,
        15: <Delete key={15}/>,
        17: <Equal key={17}/>
    }
    let number = 1;

    return (
        <section className='calculator'>
            <div className='output'></div>
            <section className='buttons'>
                {buttons.map((_,index) => {
                    return (
                        CONTENT[index] ? CONTENT[index] : <Button key= {index} className="button" content={number != 10 ? number++ : number = 0}/>
                    )
                })}
            </section>
        </section>
    )
}