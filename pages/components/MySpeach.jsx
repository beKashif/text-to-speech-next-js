import React, {useState} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

const MySpeach = () => {

    const [text, setText] = useState('')
    const { speak, speaking, cancel } = useSpeechSynthesis();

    const handleSpeak = () => {
        speak({ text });
    }

    const handleStop = () => {
        cancel();
    }

  return (
    <div>
        <h1>SpeakMe</h1>
        <textarea value={text} onChange={e=>setText(e.target.value)} />
        <br></br>
        <button onClick={handleSpeak} disabled={speaking}>
            Speak
        </button>
        <button onClick={handleStop} disabled={!speaking}>
            Stop
        </button>
    </div>
  )
}

export default MySpeach