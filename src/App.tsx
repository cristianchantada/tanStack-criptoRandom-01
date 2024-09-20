import { useRandom } from "./hooks/useRandom";
import "./App.css";
// import { RandomNumber } from './components/RandomNumber';

function App() {

  const { randomQuery } = useRandom();
  
  const {   
    isLoading,
    isFetching,
    data: number,
    error,
    refetch,
  } = randomQuery;

  return (
    <>
      {isFetching ? <h1>Cargando...</h1> : <h1>Número: {number}</h1>}

      {/* <RandomNumber /> */}

      <div>{JSON.stringify(error)}</div>

      {
        <button disabled={isLoading} onClick={() => refetch()}>
          Nuevo número
        </button>
      }
    </>
  );
}

export default App;
