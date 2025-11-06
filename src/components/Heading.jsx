
export function Heading(props){
    return(
        <div className={`relative mt-10 lg:w-3/7 w-8/10 m-auto`}>
            <h2 className={`font-bold text-white text-${props.align}`}>{props.text_start} <span className="text-orange-400">{props.span}</span> {props.text_end}</h2>
            <img className={`absolute top-0 left-50 -z-1 w-2/4`} src={props.src} alt="" />
        </div>
    )
}