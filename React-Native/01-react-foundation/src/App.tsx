import { Counter } from "./components/Counter.tsx"
import { CounterWithHook } from "./components/CounterWithHook.tsx"
import {
  BasicFunctions,
  BasicTypes,
  ObjectLiterals
} from "./typescript/index.ts"

function App() {

  return (
    <main>
      <h1> Intro TS - react </h1>
      {/* Aqui  */}
      <BasicTypes />
      <hr />
      <ObjectLiterals />
      <hr />
      <BasicFunctions />
      <hr />
      <Counter />
      <hr />
      <CounterWithHook />

    </main>

  )
}

export default App
