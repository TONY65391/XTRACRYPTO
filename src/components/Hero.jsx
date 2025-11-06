import img1 from "../assets/images/img1.png"
import { Link } from "./Link"

export function Hero(){
    return(
        <div className="text-white lg:flex lg:items-center lg:justify-between m-auto mt-20 w-8/10 lg:w-full">
            <div className="w-7/7 lg:text-left text-center">
                <h1 className="font-bold">The blockchain platform for <span className="text-orange-400">real money</span> and <span className="text-orange-400">assets</span>.</h1>
                <p className="lg:mt-2 mt-3 leading-7">A cryptocurrency is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.</p>

                <div className="flex gap-5 m-auto mt-5 w-fit lg:w-full">
                    <Link text="Get Started" bg="orange" color="black" hover="white"/>
                    <Link text="Learn more" color="white" hover="black"/>
                </div>
            </div>

            <div className="w-4/5 m-auto mt-10 lg:m-0 lg:w-full">
                <img src={img1} alt="" />
            </div>
        </div>
    )
}