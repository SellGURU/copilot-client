/* eslint-disable @typescript-eslint/no-unused-vars */

import { ControlsContainer, FullScreenControl, SigmaContainer, ZoomControl ,SearchControl} from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { LoadGraph } from './components/LoadGraph';
import { LayoutForceAtlas2Control } from "@react-sigma/layout-forceatlas2";

function App() {
  return (
    <>
    <div style={{width:'100%',height:'100vh' ,background:'white'}}>
        <SigmaContainer style={{ height: "100vh", width: "100%" }}>
          <LoadGraph />
        <ControlsContainer position={"bottom-right"}>
          <ZoomControl />
          <FullScreenControl />
          <LayoutForceAtlas2Control autoRunFor={10000} settings={{ settings: { slowDown: 10 } }} />
        </ControlsContainer>
        <ControlsContainer position={"top-right"}>
          <SearchControl style={{ width: "200px" }} />
        </ControlsContainer>          
        </SigmaContainer>
    </div>
    </>
  )
}

export default App
