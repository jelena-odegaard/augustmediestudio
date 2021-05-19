import ReactPlayer from 'react-player/lazy';

export default function VideoTransport() {
    return(
        <>
        <div className='player-wrapper'>
            <ReactPlayer 
            className='react-player'
            controls 
            light
            playsinline
            url='https://vimeo.com/418031073' 
            onReady={()=>console.log('onReady callback')}
            onStart={()=>console.log('onStart callback')}
            onPause={()=>console.log('onPause callback')}
            onEnded={()=>console.log('onEnded callback')}
            onError={()=>console.log('onError callback')}
            />
        </div>
        </>
    );
    }