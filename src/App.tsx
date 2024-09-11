import React, {useEffect} from 'react';
import "@egjs/view3d/css/view3d-bundle.min.css";

const App: React.FC = () => {

    useEffect(() => {
        return () => {
            window.open('https://thepayback.us');
        }
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.top}>
                <img src="/thePayback.png" alt="The Payback" style={styles.brand}/>
            </div>
            <div style={styles.bottom}>
                <model-viewer ar ar-scale="fixed" camera-controls
                              touch-action="pan-y" alt="A 3D model of an astronaut" shadow-intensity="2"
                              max-camera-orbit="auto 90deg auto"
                              ios-src="/moneys.usdz" xr-environment
                              style={{width: '100%', height: '100%'}}
                >

                    <button
                        slot="ar-button"
                        style={styles.launchButton}>
                        <div
                            onClick={() => {
                                setTimeout(() => {
                                    window.open('https://thepayback.us');
                                }, 5000);
                            }}
                        >
                            Launch
                        </div>
                    </button>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '10%',
                            right: 0,
                            left: 0,
                            margin: '1em',
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
