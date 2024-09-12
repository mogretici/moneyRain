import React from 'react';
import "@egjs/view3d/css/view3d-bundle.min.css";

const App: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.top}>
                <img src="/thePayback.png" alt="The Payback" style={styles.brand}/>
            </div>
            <div style={styles.bottom}>
                <model-viewer
                    id="model-viewer"
                    camera-controls="true"
                    touch-action="pan-y"
                    autoplay="true"
                    ar="true"
                    ar-scale="fixed"
                    max-camera-orbit="auto 90deg auto"
                    ar-modes="webxr scene-viewer quick-look"
                    scale="0.2 0.2 0.2"
                    animation-name="Car"
                    shadow-intensity="1"
                    ar-placement="floor"
                    auto-rotate="true"
                    camera-target="0m 0m 0m"
                    src="/rig.glb"
                    ios-src="/rig.usdz"
                >
                    <button
                        slot="ar-button"
                        style={styles.launchButton}>
                        Launch
                    </button>
                </model-viewer>
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        left: 0,
                        bottom: 0,
                        padding: '1em',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <button
                        style={styles.linkButton}
                        onClick={() => {
                            window.open('https://thepayback.us', '_blank');
                        }}
                    >
                        <img src="/link.png" alt="The Payback" width={'100%'}/>
                    </button>
                </div>
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
    linkButton: {
        width: '10em',
        height: '3em',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(98,98,98,0.49)',
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