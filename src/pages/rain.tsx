import React, {useEffect, useRef} from 'react';
import {useStream} from "../context/StreamContext.tsx";

const Rain: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const {stream} = useStream();

    const enableFullscreen = () => {
        if (containerRef.current) {
            const elem = containerRef.current as any;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }
    };


    useEffect(() => {
        if (stream && videoRef.current) {
            videoRef.current.srcObject = stream;
        }
        enableFullscreen();
    }, [stream]);


    return (
        <div ref={containerRef} style={styles.container}>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={styles.video}
            />
            <img
                src="/overlay.gif"
                alt="Overlay GIF"
                style={styles.overlayGif}
            />
            <img
                src="/thePayback.png"
                alt="The Payback"
                style={styles.brand}
            />
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'black',
    },
    video: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    overlayGif: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
    },
    brand: {
        position: 'absolute',
        bottom: '5%',
        left: '35%',
        right: '35%',
        width: '30%',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    },
};

export default Rain;
