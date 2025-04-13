import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { Sidebar } from './components/Sidebar'
import { Canvas } from './components/Canvas';

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

  function handleDeleteComponent(id) {
    setCanvasComponents((dropZoneComponents) => dropZoneComponents.filter((element) => element.id !== id));
  }

  return (
    <div className='grid grid-cols-4'>
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} onDragStart={handleOnDrag}/>
      <Canvas onDrop={handleOnDrop} canvasComponents={canvasComponents} onDeleteComponent={handleDeleteComponent}/>
    </div>    
  )
}

export default App
