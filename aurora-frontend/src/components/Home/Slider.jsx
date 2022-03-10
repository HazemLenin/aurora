import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SliderContainer = styled.div`
    width: 100%;
    height: 70vh;
    background: #888888;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.button`
    width: 30px;
    height: 100%;
    display: flex;
    position: absolute;
    background: black;
    color: white;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    z-index: 30;
    border: none;
    ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
    cursor: pointer;
    opacity: .2;
    transition: all .2s ease-out;

    &:hover {
        opacity: 1;
        transform: scale(1.3);
    }
`;

const ButtonGroup = styled.div`
    width: 300px;
    height: 30px;
    display: flex;
    /* flex: 1; */
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    opacity: .2;
    transition: all .2s ease-out;

    &:hover {
        opacity: 1;
    }
`;

const SlideButton = styled.div`
    width: 100%;
    height: 3px;
    background: ${props => props.active ? 'white' : 'darkgrey'};
    margin: 0 5px;
    cursor: pointer;
    transition: all .2s ease-out;
    &:hover {
        background: white;
        transform: scale(1.3);
    }
`;

const Slide = styled.div`
    width: 100%;
    height: 100%;
    display: inline-block;
    padding: 30px;
    /* background: ${props => props.color}; */
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
`;

const Wrapper = styled.div`
    height: 100%;
    width: auto;
    white-space: nowrap;
    transform: ${props => `translateX(-${props.index*100}%)`};
    transition: transform .5s ease-out;
`;

function Slider() {
    const [index, setIndex] = useState(0);
    const [slides, setSlides] = useState([
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
        <SliderContainer>
            <Arrow direction="left" onClick={leftSlide}>
                <ChevronLeftIcon />
            </Arrow>

            <Wrapper index={index}>
                {slides.map((slide, i) => <Slide key={i} color={slide.color} image={slide.image}>
                    <h1 style={{color: "white", fontWeight: "lighter", fontSize: "10vw"}}>SALES ARE ON!</h1>
                    <h1 style={{color: "white", fontWeight: "lighter", fontSize: "10vw", textAlign: "end"}}>GET UP TO 50%</h1>
                </Slide>)}
            </Wrapper>

            <ButtonGroup>
                {slides.map((slide, i) => <SlideButton key={i} active={index === i} onClick={() => setIndex(i)} />)}
            </ButtonGroup>
            
            <Arrow direction="right" onClick={rightSlide}>
                <ChevronRightIcon />
            </Arrow>
        </SliderContainer>
    </>;
}

export default Slider;
