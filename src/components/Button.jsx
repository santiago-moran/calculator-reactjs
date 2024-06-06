import '../../styles.css'

export function Button ({content}) {
    return (
        <div className={isNaN(parseInt(content)) && content == "=" ? "button symbol equal" : (isNaN(parseInt(content)) ? "button symbol" : "button")}>{content}</div>
    )
}