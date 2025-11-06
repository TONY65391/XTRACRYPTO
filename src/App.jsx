import bg_top from "./assets/images/bg-top.png"
import title_bg from "./assets/images/title-bg.png"
import img2 from "./assets/images/img2.png"
import img3 from "./assets/images/img3.png"
import img4 from "./assets/images/img4.png"
import { Link } from './components/Link';
import { Header } from './components/Header';
import { Hero } from "./components/Hero";
import { Heading } from "./components/Heading";
import { SquareCard } from "./components/SquareCard";
import './App.css'

function App(){

  return(
    <body className={`w-95/100 m-auto overflow-x-hidden relative`}>
      <img className="absolute top-0 -z-1" src={bg_top} alt="" />
      <Header />
      <Hero />
      <div className="lg:mt-50 mt-30">
        <Heading src={title_bg} align="center" width="2/4" text_start="Harness the " span="Collective Power" text_end=" of your User's CPU"/>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SquareCard h3="Default Opt-In" p="All users of your app will become eligible after agreeing during install." src={img4}/>
          <SquareCard h3="Rewarded Experience" p="Users receive valuable in-app rewards in exchange for mining online." src={img3}/>
          <SquareCard h3="Flexible Opt-Out" p="Users can choose to opt-out at any point and even get paid for remaining crypto." src={img2}/>
        </div>
      </div>
    </body>
  )
}

export default App;