import React, { useState } from 'react';
import PhotoEntry from './components/PhotoEntry';
import './App.css';

function App() {
    const [inputValue, setInputValue] = useState('A pokemon with blue eyes, red skin, winds and fire type');
    const [current_image, setImage] = useState('');
    const [current_prompt, setPrompt] = useState('');

    const handleClick = () => {
        setImage("txt2img1.png")
        setPrompt(inputValue)
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='App'>
            <h1 >Text to image generation &#x1F4A5; &#x1F3D5; </h1>
            <section class="section">
                <div class="box-main">
                    <div class="container">
                        <input type="text"
                            name="Generate"
                            id="generate"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="input-box" />
                        <button class="btn btn-sm" onClick={handleClick} className="button1">Generate</button>
                    </div>
                </div>
            </section>
            <section >
                <div class="container">
                    <PhotoEntry src={current_image || 'default.png'} prompt={current_prompt} />
                </div>
            </section>
        </div>
    )
}

export default App;