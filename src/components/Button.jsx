import '../../styles.css'

export function Button ({className, content, handleClick}) {
    return (
        <div 
        className={className} 
        onClick={() => {
            isNaN(parseInt(content)) ? 
            (content == "." ? handleClick(content) : handleClick()) 
            : handleClick(content)
        }}>{content}</div>
    )
}