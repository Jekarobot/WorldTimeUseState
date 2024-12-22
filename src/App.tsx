import './App.css'
import Clock from './components/Clock/Clock';
import  Menu from './components/Menu/Menu'
import { useState } from 'react'

function App() {

  const [clocks, setClocks] = useState<{name: string, timeZone: string}[]>([]);

  const handleAddClock = (name: string, timeZone: string) => {
    setClocks([...clocks, {name, timeZone}]);
  };

  const handleRemoveClock = (index: number) => {
    setClocks(clocks.filter((_, i) => i !== index));
  }

  return (
    <>
      <Menu onAddClock={handleAddClock}/>
      <div className="clocks-container">
        {clocks.map((clock, index) => (
          <Clock
            key={index}
            name={clock.name}
            timeZone={clock.timeZone}
            onRemove={() => handleRemoveClock(index)}
          />
        ))}
      </div>
    </>
  )
}

export default App
