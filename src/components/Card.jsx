
export function Card(props){
    return(
        <div className="text-white CARD p-5 rounded-sm bg-[rgba(40,40,40,27)] md:bg-transparent mt-5 md:mt-0">
            <div className="flex items-center justify-between mb-5 gap-5">
                <h3 className="font-bold w-3/5 md:w-4/5">{props.h3}</h3>
                <img className="w-[70px] md:w-1/5" src={props.src} alt="" />
            </div>
            <p className="text-gray-400">{props.text_start} <br /> {props.text_end}</p>
        </div>
    )
}