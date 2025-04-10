import './App.css'
import { useState } from "react";
import { Sidebar } from './components/Sidebar'

function App() {
  const [sidebar, setSidebar] = useState(false);

  function handleSidebar(state) {
    setSidebar(state);
  }

  return (
    <>
      <Sidebar sidebar={sidebar} handleSidebar={handleSidebar} />
    </>    
  )
}

export default App
