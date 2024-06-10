import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Delete () {
    return (
        <Button className="button symbol" content={<FontAwesomeIcon icon={faDeleteLeft} />}/>
    )
}