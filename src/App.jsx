import bg_top from "./assets/images/bg-top.png"
import { Link } from './components/Link';
import { Header } from './components/Header';
import './App.css'

function App(){

  return(
    <body className={`w-screen overflow-x-hidden relative`}>
      <img className="absolute top-0 -z-1" src={bg_top} alt="" />
      <Header />
    </body>
  )
}

export default App;