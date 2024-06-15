import { Button } from '../Button'

export function Equal ({setResult}) {
    return (
        <Button className="button symbol equal" content="=" handleClick={() => setResult(true)}/>
    )
}