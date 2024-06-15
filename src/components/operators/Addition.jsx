import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

export function Add ({setOperator, className}) {
    return (
        <Button className={className} content={<FontAwesomeIcon icon={faPlus} />} handleClick={() => setOperator("+")}/>
    )
}