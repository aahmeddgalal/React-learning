import './App.css'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Alert } from './Alert'
import { Contact } from './Contact'





function App() {


  return (
    <>
    <Contact />
    <Alert>Right!</Alert>
    <Alert type = "error">Wrong</Alert>
      <h1>React Course</h1>
      <Welcome />
      <Button />
    </>
  )
}

export default App
