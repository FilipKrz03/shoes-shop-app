import Caraousel from "../components/HomePage/Caraousel"
import Hero from "../components/HomePage/Hero"
import './animations.scss'

const HomePage = () => {
 return(
    <div className="appear-left">
    <Hero />
    <Caraousel />
    </div>
) 
}

export default HomePage