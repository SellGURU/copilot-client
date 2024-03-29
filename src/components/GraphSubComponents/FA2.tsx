import { useWorkerLayoutForceAtlas2 } from "@react-sigma/layout-forceatlas2";
import { useEffect } from "react";

const Fa2: React.FC = () => {
const { start, kill } = useWorkerLayoutForceAtlas2({ settings: { slowDown: 10 } });

useEffect(() => {
    // start FA2
    start();
    return () => {
    // Kill FA2 on unmount
    kill();
    };
}, [start, kill]);
useEffect(() => {
    setTimeout(() => {
        kill()
    }, 3000);
})
return null;
};

export default Fa2