import { Button } from '../Button'

export function Split ({setOperator}) {
    return (
        <Button className="button symbol" content="/" handleClick={() => setOperator("/")}/>
    )
}