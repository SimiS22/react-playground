import React from 'react'
import './DrumKit.scss'

const drumKeyDetails = [
    { keyCode: 65, keyName: 'A', sound: 'CLAP', audio: './clap.wav' },
    { keyCode: 83, keyName: 'S', sound: 'HIHAT', audio: './clap.wav' },
    { keyCode: 68, keyName: 'D', sound: 'KICK', audio: './clap.wav' },
    { keyCode: 70, keyName: 'F', sound: 'OPENHAT', audio: './clap.wav' },
    { keyCode: 71, keyName: 'G', sound: 'BOOM', audio: './clap.wav' },
    { keyCode: 72, keyName: 'H', sound: 'RIDE', audio: './clap.wav' },
    { keyCode: 74, keyName: 'J', sound: 'SNARE', audio: './clap.wav' },
    { keyCode: 75, keyName: 'K', sound: 'TOM', audio: './clap.wav' },
    { keyCode: 76, keyName: 'L', sound: 'TINK', audio: './clap.wav' },
]
const DrumKit: React.FC = () => {
    const drum = drumKeyDetails.map((element) => {
        return (
            <div className='keys'>
                <div className='key' data-key={element.keyCode}>
                    <kbd>{element.keyName}</kbd>
                    <span className='sound'>{element.sound}</span>
                    <audio data-key={element.keyCode} src={element.audio}></audio>
                </div>
            </div>
        )
    })
    return (
        <div className='drumKit'>{drum}</div>
    )
}
export default DrumKit