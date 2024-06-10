import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Multiply () {
    return (
        <Button className="button symbol" content={<FontAwesomeIcon icon={faXmark} />}/>
    )
}