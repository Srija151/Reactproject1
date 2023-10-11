import React from 'react'
const scaleNames={
    c:"celsius",
    f:"fahrenheit",
}
function TemperatureInput({scale,temperature,onTemperatureChange}) {
    const onChangeHandle=(event)=>{
        onTemperatureChange(event.target.value);

    }
  return (
    <div>
        <center>
        <fieldset>
            <label>Enter Temperature in {scaleNames[scale]}</label>
            <div>
                <input type='text' value={temperature} onChange={onChangeHandle}/>
            </div>
        </fieldset>
        </center>
    </div>
  )
}

export default TemperatureInput