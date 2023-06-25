import React, { useState } from 'react';
import './Style.css';

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setExpression((prevExpression) => prevExpression + value);
    };

    const handleClearButtonClick = () => {
        setExpression('');
        setResult('');
    };

    const handleEqualsButtonClick = () => {
        try {
            const evalResult = eval(expression);
            setResult(evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="body-calculator">
            <div className="display">
                <div>{expression}</div>
                <div>{result}</div>
            </div>
            <div className="row-button">
                <button onClick={() => handleButtonClick(7)}>7</button>
                <button onClick={() => handleButtonClick(8)}>8</button>
                <button onClick={() => handleButtonClick(9)}>9</button>
                <button className='button-orange' onClick={() => handleButtonClick('*')}>X</button>
            </div>
            <div className="row-button">
                <button onClick={() => handleButtonClick(4)}>4</button>
                <button onClick={() => handleButtonClick(5)}>5</button>
                <button onClick={() => handleButtonClick(6)}>6</button>
                <button className='button-orange' onClick={() => handleButtonClick('-')}>-</button>
            </div>
            <div className="row-button">
                <button onClick={() => handleButtonClick(1)}>1</button>
                <button onClick={() => handleButtonClick(2)}>2</button>
                <button onClick={() => handleButtonClick(3)}>3</button>
                <button className='button-orange' onClick={() => handleButtonClick('+')}>+</button>
            </div>
            <div className="row-button">
                <button onClick={() => handleButtonClick(0)}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={handleEqualsButtonClick}>=</button>
                <button className='button-orange' onClick={() => handleButtonClick('/')}>/</button>
            </div>
            <div className="clear-butoon">
                <button className='clear' onClick={handleClearButtonClick}>Clear</button>
            </div>
        </div>
    );
};

export default Calculator;
