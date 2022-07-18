import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


function Slider() {
    const [index, setIndex] = useState(0);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides([
            {
                color: "#f00",
                image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            },
            {
                color: "#0f0",
                image: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?cs=srgb&dl=pexels-ali-pazani-2887718.jpg&fm=jpg"
            },
            {
                color: "#00f",
                image: "https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            }
        ]);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            if ( index >= slides.length - 1 ) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [index, slides.length]);

    function leftSlide(e) {
        e.preventDefault();
        if (index <= 0) {
            setIndex(slides.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    function rightSlide(e) {
        e.preventDefault();
        if (index >= slides.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    return <>
        <section className="relative w-full h-96 lg:h-[70vh] bg-gray-500 overflow-hidden">
            <button className="w-8 h-full flex absolute bg-black text-white justify-center items-center top-0 left-0 bottom-0 z-30 border-none cursor-pointer opacity-20 transition-all hover:opacity-100 hover:scale-110" onClick={leftSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="w-auto h-full whitespace-nowrap transition-all duration-500" style={{transform: `translateX(-${index*100}%)`}}>
                {slides.map((slide, i) => <div className="w-full h-full inline-block p-8 bg-center bg-cover" style={{backgroundImage: `url('${slide.image}')`}} key={i}>
                    <h1 className="text-white text-[10vw]">SALES ARE ON!</h1>
                    <h1 className="text-white text-[10vw] text-end">GET UP TO 50%</h1>
                </div>)}
            </div>

            <div className="w-80 h-8 flex justify-around items-center absolute bottom-1 left-1/2 -translate-x-1/2 bg-black opacity-20 transition-all hover:opacity-100">
                {slides.map((slide, i) => <button className={"w-full h-1 mx-1 cursor-pointer transition-all hover:bg-white hover:scale-110" + (index === i ? " bg-white" : " bg-gray-700")} key={i} onClick={() => setIndex(i)} />)}
            </div>
            
            <button className="w-8 h-full flex absolute bg-black text-white justify-center items-center top-0 right-0 bottom-0 z-30 border-none cursor-pointer opacity-20 transition-all hover:opacity-100 hover:scale-110" onClick={rightSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </section>
    </>;
}

export default Slider;
