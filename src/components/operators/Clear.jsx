import { Button } from '../Button'

export function Clear ({clearAll}) {
    return (
        <Button className="button symbol" content="C" handleClick={() => clearAll()}/>
    )
}