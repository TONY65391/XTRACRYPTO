
export function Link(props){

    return(
        <a href={props.url} className={`lg:py-3 lg:px-7 py-2 px-5 hover:bg-orange-400 hover:text-black LINK font-bold cursor-pointer bg-${props.bg}-400 rounded-3xl border-1 border-orange-400 text-white`}>{props.text}</a>
    )
}