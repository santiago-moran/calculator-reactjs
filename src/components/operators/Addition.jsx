import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

export function Add ({setOperator}) {
    return (
        <Button className="button symbol" content={<FontAwesomeIcon icon={faPlus} />} handleClick={() => setOperator("+")}/>
    )
}