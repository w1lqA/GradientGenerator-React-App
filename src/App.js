import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUp,
    faArrowDown,
    faArrowRight,
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import DirectionButton from './components/DirectionButton';
import CircularSlider from 'react-circular-slider-svg';


function App() {
    const [currentDirection, setDirection] = useState("90");
    const [colorA, setColorA] = useState("#7986cb")
    const [colorB, setColorB] = useState("#1a237e")
    const [outputCode, setOutputCode] = useState(``)

    const handleColorAChange = useCallback((event) => {
        setColorA(event.target.value)
    }, [])
    const handleColorBChange = useCallback((event) => {
        setColorB(event.target.value)
    }, [])
    
    const [activeDirection, setActiveDirection] = useState()
    const handleDirectionChange = useCallback((directionPercentage) => {
        setActiveDirection(directionPercentage + 'deg');
        setDirection(directionPercentage)
    }, [])

    const changeBackground = () => {
        document.body.style.backgroundImage = (`linear-gradient(${currentDirection}deg, ${colorA}, ${colorB})`);
        setOutputCode(`linear-gradient(${currentDirection}deg, ${colorA}, ${colorB})`)
    }

    const copyText = () => {
        const code = document.getElementById('code') 
        code.select();
        document.execCommand('copy')
        alert('Gradient copied!')
    }

    const [buttons, setButtons] = useState([
        {buttonIcon: faArrowUp, isButtonActive: activeDirection === 'to top', onClick: handleDirectionChange, direction: 'to top'},
        {buttonIcon: faArrowDown, isButtonActive: activeDirection === 'to bottom', onClick: handleDirectionChange, direction: 'to bottom'},
        {buttonIcon: faArrowRight, isButtonActive: activeDirection === 'to left', onClick: handleDirectionChange, direction: 'to left'},
        {buttonIcon: faArrowLeft, isButtonActive: activeDirection === 'to right', onClick: handleDirectionChange, direction: 'to right'},
        {buttonIcon: faArrowUp, isButtonActive: activeDirection === 'to top right ', onClick: handleDirectionChange, direction: 'to top right ', buttonClasses: 'rotate-icon'},
        {buttonIcon: faArrowDown, isButtonActive: activeDirection === 'to bottom left ', onClick: handleDirectionChange, direction: 'to bottom left ', buttonClasses: 'rotate-icon'},
        {buttonIcon: faArrowRight, isButtonActive: activeDirection === 'to bottom right ', onClick: handleDirectionChange, direction: 'to bottom right ', buttonClasses: 'rotate-icon'},
        {buttonIcon: faArrowLeft, isButtonActive: activeDirection === 'to top left ', onClick: handleDirectionChange, direction: 'to top left ', buttonClasses: 'rotate-icon'},
    ]) 
    return (
        <div className="container">
            <div className='title'>
                <h1>Gradient Generator</h1>
                <p>by <a href='https://github.com/w1lqA'>w1lqA</a></p>
            </div>
            <div className="colors">
                <input type="color" value={colorA} onChange={handleColorAChange}/>
                <input type="color" value={colorB} onChange={handleColorBChange}/>
            </div>
            <div className='colors-text' style={{paddingTop: "10px"}}>
                <p>{colorA}</p>
                <p>{colorB}</p>
            </div>
            <div className="buttons">
                {/* {buttons.map((button)=>(
                    <DirectionButton button={button}/>
                ))} */}
                <div style={{display: 'flex', flexDirection: 'column', margin: '0 auto'}}>
                    <input type='range' min={0} max={360} step={1} value={currentDirection} onChange={(event) => handleDirectionChange(event.target.value)}/>    
                    <h4 style={{textAlign: 'center'}}>{`${currentDirection}°`}</h4>

                </div>    
                
            </div>
            <button onClick={changeBackground} id='submit'>Generate</button>
            <div className="output">
                <textarea id="code" rows="2" value={outputCode}></textarea>
                <button id='copy' onClick={copyText}>Copy</button>
            </div>
        </div>
    );
}

export default App;
