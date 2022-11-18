import { Header } from './components/Header'
import { Tasklist } from './components/Tasklist'
import { Task, TaskProps } from './components/Task'

import './global.css'
/* 
interface Task extends TaskProps {
  id: string
} */

/* const tasks: Task[] = [
  {
    id: uuidv4(),
    content: "Lorem ipsumipsum",
    isComplete: true,

  },
  {
    id: uuidv4(),
    content: "Lorem ipsumipsum",
    isComplete: false
  }
] */

function App() {

  return (
    <div>
      <Header />
      <main>
        <Tasklist />
      </main>
    </div>
  )
}

export default App
