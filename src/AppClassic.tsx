import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshToken, setRefreshToken] = useState(0);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    )
      .then((response) => response.json())
      .then((data) => {
        setNumber(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log("Hola Mundo !");

  return (
    <>
      {isLoading ? <h1>Cargando...</h1> : <h1>Número: {number}</h1>}

      <div>{error}</div>

      <button
        disabled={isLoading}
        onClick={() => setRefreshToken(refreshToken + 1)}
      >
        Nuevo número
      </button>
    </>
  );
}

export default App;
