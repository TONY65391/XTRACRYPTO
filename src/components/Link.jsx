
export function Link(props){

    return(
        <a href={props.url} className={`lg:py-3 block text-center lg:px-7 py-2 px-5 hover:bg-orange-400 hover:text-${props.hover} LINK font-${props.bold} cursor-pointer bg-${props.bg}-400 text-${props.color} rounded-3xl border-1 border-orange-400`}>{props.text}</a>
    )
}