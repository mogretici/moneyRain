import React from 'react';
import {useNavigate} from "react-router-dom";
import {useStream} from "./context/StreamContext.tsx";

const App: React.FC = () => {
    const navigate = useNavigate();
    const {setStream} = useStream();

    const handleLaunch = () => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(
                    {video: {facingMode: {exact: "environment"}}}
                );
                setStream(stream);
                navigate('/rain');
            } catch (error) {
                console.error('Kamera erişim hatası:', error);
            }
        }
        startCamera().then();

    }
    return (
        <div style={styles.container}>
            <div style={styles.top}>
                <img src="/thePayback.png" alt="The Payback" style={styles.brand}/>
            </div>
            <div style={styles.bottom}>
                <button style={styles.launchButton} onClick={() => {
                    handleLaunch();
                }}>Launch
                </button>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    brand: {
        width: '15%',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    },
    top: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        flex: 1,
    },
    bottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    launchButton: {
        width: '10em',
        height: '3em',
        backgroundColor: '#70fd00',
        color: 'black',
        border: 'white 1px solid',
        borderRadius: '2em',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1.5em',
    },
};
export default App;
