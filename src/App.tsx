import React, { useEffect, useRef } from 'react';
const App: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Kamera erişim hatası:', error);
        }
    };

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
        startCamera().then(() => enableFullscreen());
    }, []);

    return (
        <div ref={containerRef} style={styles.container}>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={styles.video}
            />
            <img
                src="/src/assets/overlay.gif"
                alt="Overlay GIF"
                style={styles.overlayGif}
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
    },
};

export default App;
