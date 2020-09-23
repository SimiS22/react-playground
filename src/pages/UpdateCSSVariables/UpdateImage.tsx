import React from 'react'
import image from './imageKerala.jpg'
import './UpdateImage.scss'


const UpdateImage: React.FC = () => {

    return (
        <div className='imageUpdation'>
            <h2>Update Variables with <span className='heading'>JS</span></h2>
            <div className='controls'>
                <label>Spacing:</label>
                <input type='range' name='spacing' min='10px' max='100px' value='10'></input>

                <label>Blur:</label>
                <input type='range' name='blur' min='0px' max='25px' value='10'></input>

                <label>Color:</label>
                <input type='color' name='base' value='black'></input>
            </div>
            <img src={image} alt='' />
        </div>
    )
}
export default UpdateImage