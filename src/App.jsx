import '../styles.css'
import { Button } from './components/Button'

export function App () {
    const buttons = Array(20).fill(null)

    return (
        <>
        <section className='calculator'>
            <div className='output'></div>
            <section className='buttons'>
                {buttons.map((_, index) => {
                    return (
                        <Button 
                        key={index}/>
                    )
                })}
            </section>
        </section>
        </>
    )
}