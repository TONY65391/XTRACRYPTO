import bg_top from "./assets/images/bg-top.png"
import { Link } from './components/Link';
import { Header } from './components/Header';
import { Hero } from "./components/Hero";
import './App.css'

function App(){

  return(
    <body className={`w-95/100 m-auto overflow-x-hidden relative`}>
      <img className="absolute top-0 -z-1" src={bg_top} alt="" />
      <Header />
      <Hero />
    </body>
  )
}

export default App;