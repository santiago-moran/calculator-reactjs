import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

export function Multiply ({setOperator, className}) {
    return (
        <Button className={className} content={<FontAwesomeIcon icon={faXmark} />} handleClick={() => setOperator("*")}/>
    )
}