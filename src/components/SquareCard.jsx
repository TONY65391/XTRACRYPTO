
export function SquareCard(props){
    return(
        <div className="SQUARECARD rounded-sm text-white text-center p-5 md:w-full w-9/10 m-auto mt-20">
            <img className="block m-auto -mt-20 w-1/2" src={props.src} alt="" />
            <div>
                <h3 className="font-bold mt-5">{props.h3}</h3>
                <p className="text-gray-400 mt-5">{props.p}</p>
            </div>
        </div>
    )
}