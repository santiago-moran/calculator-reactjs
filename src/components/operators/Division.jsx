import { Button } from '../Button'

export function Split ({setOperator, className}) {
    return (
        <Button className={className} content="/" handleClick={() => setOperator("/")}/>
    )
}