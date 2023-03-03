import React from "react";
import {motion} from "framer-motion";
import image1 from './Images/130797969_200154678330156_8228382732906068168_n.jpg';
import image3 from './Images/264741390_430633581948930_2923278118938622216_n.jpg';
import image4 from './Images/131219527_200154671663490_5912705799853065411_n.jpg';
import image5 from './Images/265347077_430633935282228_5440457189317640797_n.jpg';
import image6 from './Images/265737138_430633515282270_3687858224351263474_n.jpg';
import './Carousel.css';
import {useState, useEffect, useRef} from 'react';

const images = [image1, image3, image4, image5, image6]

const Momentos = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0)
    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, [])

    return (
        <div id='carouselComponent'>

            <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div className='inner'
                            drag='x'
                            initial={{x: 100}}
                            animate={{x: 0}}
                            transition={{duration: 0.8}}
                            dragConstraints={{right: 0, left: -width}}
                >

                    {images.map(image => (
                        <motion.div className='item' key={image}>
                            <img src={image} alt='Textoalt'/>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Momentos;