import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Sidebar } from './components/Sidebar'
import { Canvas } from './components/Canvas';

// function componentReducer(currentState, action) {
//   switch(action.type) {
//     case "heading": return {
//       ...currentState, 
//       canvasComponents: [...currentState.canvasComponents, <Heading />]
//     };

//     case "paragraph": return {
//       ...currentState, 
//       canvasComponents: [...currentState.canvasComponents, <Paragraph />]
//     };

//     default: return currentState;
//   }
// }

// export const StateContext = createContext();
// export const DispatchContext = createContext();

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [canvasComponents, setCanvasComponents] = useState([]);

  function handleSidebar(state) {
    setSidebar(state);
  }

  function handleOnDrag(e, componentType) {
    e.dataTransfer.setData("componentType", componentType);
  }

  function handleOnDrop(componentType) {
    setCanvasComponents([...canvasComponents, { id: uuidv4(), componentType: componentType }])
  }

  return (
    <div className='flex'>
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} onDragStart={handleOnDrag}/>
      <Canvas onDrop={handleOnDrop} canvasComponents={canvasComponents}/>
    </div>    
  )
}

export default App
