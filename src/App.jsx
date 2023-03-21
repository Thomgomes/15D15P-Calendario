import { useState } from 'react'
import { Calendar } from './container/calendar'
import { Logo15D15P } from "./container/Logo15D15P"
import { LogoThomCode } from "./container/LogoThomCode"

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gradient-to-br from-[white] to-[#5e17eb] w-screen h-screen flex justify-center items-center overflow-x-hidden font-Roboto text-lg">
        <div className="flex flex-col items-center justify-center">
          <Logo15D15P />
          <Calendar/>
          <LogoThomCode/>
        </div>
      </div>
    </>
  )
}

export default App
