import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useRandomFact } from './hooks/useRandomFact'

function App() {
  const { fact, error, refreshFact } = useRandomFact()
  const { imgFact } = useCatImage({ fact: fact?.fact })
  return (
    <main className='App'>
      <h1>Random cat Fact</h1>
      <section>
        {!error ? (
          fact && <p>{fact.fact}</p>
        ) : (
          <p>Sorry something was Wrong with th Random fact!!</p>
        )}
        {!error ? (
          imgFact && (
            <img
              id={imgFact.id}
              src={imgFact.url}
              alt={`Image generate by the three First worlds of this Fact random:${fact}`}
            />
          )
        ) : (
          <p>Sorry something was Wrong with the Image Random Fact!!</p>
        )}
      </section>
      <button onClick={refreshFact}>Get new Random Fact</button>
    </main>
  )
}

export default App
