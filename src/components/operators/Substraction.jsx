import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

export function Substract ({setOperator}) {
    return (
        <Button className="button symbol" content={<FontAwesomeIcon icon={faMinus}/>} handleClick={() => setOperator("-")}/>
    )
}