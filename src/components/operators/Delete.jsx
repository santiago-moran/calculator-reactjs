import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'

export function Delete ({deleteNumber}) {
    return (
        <Button className="button symbol" content={<FontAwesomeIcon icon={faDeleteLeft} />} handleClick={() => deleteNumber()}/>
    )
}