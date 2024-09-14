import React from 'react'
import Courses from '../Components/Home/Courses'
import Swiper from '../Components/Home/Swiper'
import Hero from '../Components/Home/Hero'
import Categories from '../Components/Home/Categories'
import JoinNow from "../Components/Home/JoinNow";
import Partners from '../Components/Home/Partners'
import Protocol from '../Components/Home/Protocol'
import How from '../Components/Home/How'
import Slider from '../Components/Home/Slider'
import Phone from '../Components/Home/Phone'
import Meetourexperts from '../Components/Home/Meetourexperts'

const Home = () => {
    document.title = 'Baoiam - Home'
    return (
        <>
            <Hero />
            <Courses />
            <Slider />
            <Categories />
            <Partners />
            <Protocol />
            <JoinNow />
            <How />
            <Meetourexperts/>
            <Phone />
        </>
    )
}

export default Home