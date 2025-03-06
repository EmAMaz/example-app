import { useState } from "react";
import "./App.css";
import ApiService from "./services/useApi";

function App() {
  const [data, setData] = useState("");
  const api = new ApiService();

  const mostrarDatos = async () => {
    const data = await api.getApi();
    setData(data.message);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <p>Obtener datos de la API</p>
      <button
        onClick={() => {
          mostrarDatos();
        }}
      >
        Obtener
      </button>
      {data && <p>{data}</p>}
    </>
  );
}

export default App;
