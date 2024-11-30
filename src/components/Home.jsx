import Hero from "./Hero"
import Partners from "./Partner"
import Services from "./Services"


const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-jungleGreen">
        <Hero/>
        <Partners/>
        <Services/>
    </div>
  )
}

export default Home