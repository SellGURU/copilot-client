/* eslint-disable @typescript-eslint/no-unused-vars */
import { useConstructor } from './help';
import {Sigma, RandomizeNodePositions,SigmaEnableWebGL , RelativeSize,LoadGEXF} from 'react-sigma';
function App() {
  // const myGraph = {
  //   nodes:[
  //     {id:"1", label:"Foundational Aspects of Longevity",color:'blue'}, 
  //     {id:"2", label:"Interventions for Promoting Longevity",color:'red'},
  //     {id:"3", label:"Preventive Strategies and Health Promotion",color:'yellow'},
  //     {id:"4", label:"Advanced Research and Clinical Insights",color:'yellow'},
  //     {id:"5", label:"Policy, Ethical, and Societal Considerations",color:'yellow'},
  //     {id:"6", label:"Technological Innovations and Future Directions",color:'yellow'},
  //     {id:"7", label:"Principles and Mechanisms of Aging",color:'yellow'},
  //     {id:"8", label:"Theoretical Frameworks and Longevity Models",color:'yellow'},
  //     {id:"9", label:"Biomarkers and Predictive Indicators of Longevity",color:'yellow'},
  //     {id:"10", label:"Geroscience",color:'yellow'},
  //     {id:"11", label:"Pharmacological and Molecular Interventions",color:'yellow'}
  //   ], 
  //   edges:[
  //     {id:"1",source:"1",target:"7",label:""},
  //     {id:"2",source:"1",target:"8",label:""},
  //     {id:"3",source:"1",target:"9",label:""},
  //     {id:"4",source:"1",target:"10",label:""},
  //     {id:"5",source:"2",target:"11",label:""},
  //   ]};
  useConstructor(() =>{

  })
  return (
    <>
    <div style={{width:'100%',height:'100vh' ,background:'white'}}>
      <Sigma style={{width:"100%", height:"100vh"}} renderer="webgl" settings={{drawEdges: true, clone: true}}>
        <RelativeSize initialSize={15}/>
        <RandomizeNodePositions/>
        <LoadGEXF path={"/note.gexf"}>
            <SigmaEnableWebGL></SigmaEnableWebGL>
        </LoadGEXF>        
      </Sigma>

    </div>
    </>
  )
}

export default App
