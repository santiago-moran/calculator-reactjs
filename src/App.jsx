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
        0: <Clear />,
        1: <Split />,
        2: <Multiply />,
        3: <Add />,
        7: <Substract />,
        11: '.',
        15: <Delete />,
        17: <Equal />
    }
    let number = 1;

    return (
        <section className='calculator'>
            <div className='output'></div>
            <section className='buttons'>
                {buttons.map((_, index) => {
                    return 
                })}
            </section>
        </section>
    )
}