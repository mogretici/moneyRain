import React, {useEffect, useRef} from 'react';
import {useStream} from "../context/StreamContext.tsx";
import View3D from "@egjs/react-view3d";
import "@egjs/react-view3d/css/view3d-bundle.min.css";


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
            <View3D
                tag="div"
                src="/moneys.glb"
                style={styles.view3D}
                onReady={e => {
                    console.log("3D Model is loaded", e);
                }}
                webAR={true}
                sceneViewer={true}
                quickLook={true}
                animationRepeatMode="all"
                useDefaultEnv={true}
                arPriority={["webAR", "sceneViewer", "quickLook"]}
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
    brand: {
        position: 'absolute',
        bottom: '5%',
        left: '35%',
        right: '35%',
        width: '30%',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    },
    view3D: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
    },
};
export default Rain;
