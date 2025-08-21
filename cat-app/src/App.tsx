import './App.css'
import { useFact } from './hooks/useFact'

function App() {
  const { error, loading, fact, imgFact, getRandomFact } = useFact()
  return (
    <main className='App'>
      <h1>Random cat Fact</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
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
      )}
      <button onClick={getRandomFact}>Get new Random Fact</button>
    </main>
  )
}

export default App
