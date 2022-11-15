import { Header } from './components/Header'
import { Taskbar } from './components/Taskbar'
import { Tasklist } from './components/Tasklist'

import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div>
        <Taskbar />
      </div>

      <main>
        <Tasklist />
      </main>
    </div>
  )
}

export default App
