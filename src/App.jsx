import '../styles.css'
import { Button } from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function App () {
    const buttons = Array(18).fill(null)
    const CONTENT = {
        0: 'C',
        1: '/',
        2: <FontAwesomeIcon icon={faXmark}/>,
        3: <FontAwesomeIcon icon={faPlus}/>,
        7: <FontAwesomeIcon icon={faMinus}/>,
        11: '.',
        15: <FontAwesomeIcon icon={faDeleteLeft}/>,
        17: '='
    }
    let number = 1;

    return (
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
    )
}