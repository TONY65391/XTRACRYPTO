
export function Heading(props){
    return(
        <div className={`relative mt-10`}>
            <h2 className={`font-bold text-white lg:w-4/7 w-full m-${props.margin} text-center lg:text-${props.align}`}>{props.text_start} <span className="text-orange-400">{props.span}</span> {props.text_end}</h2>
            <img className={`absolute top-0 right-0 -z-1 md:w-1/5 w-3/5`} src={props.src} alt="" />
        </div>
    )
}