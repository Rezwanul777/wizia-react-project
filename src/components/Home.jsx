import Allocate from "./Allocate.jsx"
import Carousel from "./Carousel.jsx"
import Embrace from "./Embrace.jsx"
import Hero from "./Hero"
import Partners from "./Partner"
import Prefered from "./Prefered"
import Services from "./Services"


const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-jungleGreen">
        <Hero/>
        <Partners/>
        <Services/>
        <Prefered/>
        <Carousel/>
        <Allocate/>
        <Embrace/>
        
    </div>
  )
}

export default Home