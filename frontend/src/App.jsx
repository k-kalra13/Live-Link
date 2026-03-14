import { useState } from 'react'
import { Button } from "@chakra-ui/react";
import './App.css'
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/Chatpage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />


    </div>
  )
}

export default App
