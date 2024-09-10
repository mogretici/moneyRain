import React, {useEffect, useRef} from 'react';
import {useStream} from "../context/StreamContext.tsx";
import {useNavigate} from "react-router-dom";
import View3D, {ARButton, AROverlay} from "@egjs/react-view3d";
import "@egjs/view3d/css/view3d-bundle.min.css";


const Rain: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const view3DRef = useRef<View3D | null>(null);
    const {stream} = useStream();
    const navigate = useNavigate();


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
        } else {
            navigate('/');
        }
        const arEnter = async () => {
            if (!view3DRef.current) return;
            const arAvailable = await view3DRef.current.ar.isAvailable();
            console.log("is available:", arAvailable);
            await view3DRef.current.loadPlugins(new ARButton());
            await view3DRef.current.loadPlugins(new AROverlay());
            await view3DRef.current.ar.enter();
        }
        arEnter().then(r => console.log("AR is entered", r));
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
            <div style={styles.view3D}>

                <model-viewer src="/moneys.glb" ar ar-scale="fixed" camera-controls
                              touch-action="pan-y" alt="A 3D model of an astronaut" shadow-intensity="2"
                              max-camera-orbit="auto 90deg auto"
                              ios-src="/moneys.usdz" xr-environment>
                    <button slot="ar-button"
                            style={{
                                position: 'absolute',
                                bottom: '1em',
                                left: '1em',
                                zIndex: 2,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0.5em',
                                backgroundColor: 'rgba(128,126,126,0.4)',
                                borderRadius: '1em',
                                color: 'white',
                                border: 'none',
                            }}>
                        👋 Activate AR
                    </button>

                </model-viewer>

            </div>

            <img
                src="/link.png"
                alt="The Payback Website"
                style={styles.brand}
                onClick={() => {
                    window.open('https://thepayback.us', '_blank');
                }}
            />
        </div>
    );
};

const styles: {
    [key
        :
        string
        ]:
        React.CSSProperties
} = {
    container: {
        position: 'relative',
        width:
            '100vw',
        height:
            '100vh',
        overflow:
            'hidden',
        backgroundColor:
            'black',
    },
    video: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    brand: {
        position: 'absolute',
        top: '5%',
        left: '30%',
        right: '30%',
        width: '40%',
        backgroundColor: 'rgba(128,126,126,0.4)',
        borderRadius: '5em',
        zIndex: 3,
    },
    view3D: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        touchAction: 'none',
    }
};
export default Rain;
