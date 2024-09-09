import React, {useEffect, useRef} from 'react';
import {useStream} from "../context/StreamContext.tsx";
import ViewMoney from "../components/ViewMoney.tsx";
import {useNavigate} from "react-router-dom";


const Rain: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
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
            <ViewMoney zoom={2} pitch={45} pivot={["20%", "0%", "0%"]}/>
            <ViewMoney zoom={2} pitch={90} pivot={["50%", "0%", "0%"]}/>
            <ViewMoney zoom={2} pitch={0} pivot={["70%", "0%", "0%"]}/>
            <ViewMoney zoom={2} pitch={60} pivot={["50%", "0%", "0%"]}/>
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
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
    },
    view3D2: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 2,
    },
};
export default Rain;
