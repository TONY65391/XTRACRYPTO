import bg_top from "./assets/images/bg-top.png"
import title_bg from "./assets/images/title-bg.png"
import img2 from "./assets/images/img2.png"
import img3 from "./assets/images/img3.png"
import img4 from "./assets/images/img4.png"
import icon1 from "./assets/images/icon1.png"
import icon2 from "./assets/images/icon2.png"
import icon3 from "./assets/images/icon3.png"
import icon4 from "./assets/images/icon4.png"
import icon6 from "./assets/images/icon6.png"
import { Link } from './components/Link';
import { Header } from './components/Header';
import { Hero } from "./components/Hero";
import { Heading } from "./components/Heading";
import { SquareCard } from "./components/SquareCard";
import { Card } from "./components/Card"
import './App.css'

function App(){

  return(
    <body className={`w-95/100 m-auto overflow-x-hidden relative`}>
      <img className="absolute top-0 -z-1" src={bg_top} alt="" />
      <Header />
      <Hero />
      <div className="lg:mt-50 mt-30">
        <Heading src={title_bg} align="center" width="2/4" text_start="Harness the " span="Collective Power" text_end=" of your User's CPU" margin="auto"/>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SquareCard h3="Default Opt-In" p="All users of your app will become eligible after agreeing during install." src={img4}/>
          <SquareCard h3="Rewarded Experience" p="Users receive valuable in-app rewards in exchange for mining online." src={img3}/>
          <SquareCard h3="Flexible Opt-Out" p="Users can choose to opt-out at any point and even get paid for remaining crypto." src={img2}/>
        </div>
      </div>

      <div className="mt-30">
        <Heading src={title_bg} align="left" width="1/4" text_start="The" span=" Difference " text_end="Between Us and Other Competitors."/>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          <Card src={icon1} h3="High Speed and Low Costs" text_start="What is this?" text_end="Smart contracts autonomously perform funding – collect and release payments."/>
          <Card src={icon2} h3="Easy Entry and Fair Competition" text_start="Open-source smart contract ensures fair and transparent deals between merchants and affiliates."/>
          <Card src={icon3} h3="Super Protection From Hacking" text_start="Merchant’s budget is spent on commissions charged by a number of brokers, including banks."/>
          <Card src={icon4} h3="Global P2P Trade Financing" text_start="On a decentralized platform, all user accounts are independent, this won’t breach the security of Cryptos."/>
          <Card src={icon6} h3="No More Middle-Man Loaded" text_start="Immediate funding without third parties. Smart contracts autonomously perform funding payments."/>
        </div>
      </div>
    </body>
  )
}

export default App;