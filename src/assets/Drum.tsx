import { AudioClip } from "./types";

interface DrumProps {
    audioClip: AudioClip;
}


const Drum = ({audioClip}: DrumProps) => {
    const playSound = (clip: AudioClip) =>{
        (document.getElementById(clip.keytrigger) as HTMLAudioElement)?.play().catch(console.error);
    };




    return (
        <button className="drum-pad" id={'drum-${audioClip.keyTrigger}'} onClick={() => playSound(audioClip)}>
            <audio src={audioClip.url} id={audioClip.keytrigger} className="clip" />
            {audioClip.keytrigger}
        </button>
    );
};

export default Drum;