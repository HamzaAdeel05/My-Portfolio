"use client"
import AboutMe from "./AboutMe"
import Banner from "./Banner"
import Contact from "./Contact"
import MyProject from "./MyProject"
import Skills from "./Skills"



const MainDiv = () => {
   
    return (
     <div className="space-y-20 bg-black text-white ">
        <Banner />
        <Skills />
        <MyProject />
        <AboutMe />
        <Contact />
     </div>
    )
}

export default MainDiv
