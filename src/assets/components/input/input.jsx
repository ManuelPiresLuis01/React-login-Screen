import "./input.css"

function Input(p)
{
    return (
        <input type={p.type} placeholder = {p.placeholder} />
    )
}

export {Input};