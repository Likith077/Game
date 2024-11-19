"use client"

import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide';

const prependBasePath = (url: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${url}`;

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: prependBasePath("/cyber.jpg"),
            title: "Get Ready to",
            mainTitle: "Play, Explore, Conquer.",
        },
        {
            id: 1,
            img: prependBasePath("/Ghost.jpg"),
            title: "Trending Games",
            mainTitle: "MODERN GRAPHICS",
        },
        {
            id: 2,
            img: prependBasePath("/god.jpg"),
            title: "",
            mainTitle: "Action game",
        }
    ]

    return (
        <div>
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero