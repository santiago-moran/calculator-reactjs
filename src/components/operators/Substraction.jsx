import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

export function Substract ({setOperator, className}) {
    return (
        <Button className={className} content={<FontAwesomeIcon icon={faMinus}/>} handleClick={() => setOperator("-")}/>
    )
}