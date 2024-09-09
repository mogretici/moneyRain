import React from "react";
import View3D from "@egjs/react-view3d";
import "@egjs/react-view3d/css/view3d-bundle.min.css";

const ViewMoneyModel = (
    {
        zoom,
        pitch,
        pivot
    }: {
        zoom?: any,
        pitch?: number,
        pivot?: any
    }
) => {
    return (
        <View3D
            tag="div"
            src="/moneys.glb"
            style={styles.view3D}
            onReady={e => {
                console.log("3D Model is loaded", e);
            }}
            exposure={0.4}
            pitch={pitch}
            pivot={pivot}
            initialZoom={zoom}
            wheelScrollable={true}
            rotate={false}
            zoom={false}
            sceneViewer={true}
            quickLook={true}
            animationRepeatMode="all"
            useDefaultEnv={true}
            arPriority={["webAR", "sceneViewer", "quickLook"]}
        />
    );
};
const styles: { [key: string]: React.CSSProperties } = {
    view3D: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1,
    },
};
const ViewMoney = React.memo(ViewMoneyModel);
export default ViewMoney;