import '../styles.css'
import { Button } from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

export function App () {
    const buttons = Array(18).fill(null)
    const CONTENT = {
        0: 'C',
        1: '/',
        2: 'X',
        3: '+',
        7: '-',
        11: '.',
        15: <FontAwesomeIcon icon={faDeleteLeft}/>,
        17: '='
    }
    let number = 1;

    return (
        <>
        <section className='calculator'>
            <div className='output'></div>
            <section className='buttons'>
                {buttons.map((_, index) => {
                    return (
                        <Button 
                        key={index}
                        content={CONTENT[index] ? CONTENT[index] : (number == 10 ? number = 0 : number++)}
                        />
                    )
                })}
            </section>
        </section>
        </>
    )
}