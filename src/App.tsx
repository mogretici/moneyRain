import React from 'react';
import "@egjs/view3d/css/view3d-bundle.min.css";

const App: React.FC = () => {

    return (
        <div style={styles.container}>
            <div style={styles.top}>
                <img src="/thePayback.png" alt="The Payback" style={styles.brand}/>
            </div>
            <div style={styles.bottom}>
                <model-viewer ar ar-scale="fixed" camera-controls
                              touch-action="pan-y" alt="A 3D model of an astronaut" shadow-intensity="2"
                              max-camera-orbit="auto 90deg auto"
                              ios-src="/moneys.usdz" xr-environment>
                    <button
                        slot="ar-button"
                        style={styles.launchButton}>
                        Launch
                    </button>
                </model-viewer>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url('/bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    brand: {
        width: '400px',
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
        textAlign: 'center',
        width: '100%',
        flex: 1,
    },
    launchButton: {
        width: '10em',
        height: '3em',
        backgroundColor: '#70fd00',
        color: 'white',
        border: 'white 1px solid',
        borderRadius: '2em',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1.5em',
        outline: 'none',
    },
};
export default App;
