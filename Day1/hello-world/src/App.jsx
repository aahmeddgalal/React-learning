import './App.css'
import { Welcome } from './Welcome'
import { Button } from './Button'
import { Alert } from './Alert'





function App() {


  return (
    <>
    <Alert>Right!</Alert>
    <Alert type = "error">Wrong</Alert>
      <h1>React Course</h1>
      <Welcome />
      <Button />
    </>
  )
}

export default App
