import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

export function Multiply ({setOperator}) {
    return (
        <Button className="button symbol" content={<FontAwesomeIcon icon={faXmark} />} handleClick={() => setOperator("*")}/>
    )
}