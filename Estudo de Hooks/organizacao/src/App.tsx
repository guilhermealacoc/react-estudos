import { useState } from "react";
import "./App.css";

function App() {
  const [visivel, setVisivel] = useState<"lista" | "form">("lista");

  return (
    <>
      {visivel === "lista" ? (
        <div>
          <table style={{ border: "1px solid #000" }}>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Idade</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Gui</td>
              <td>23</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jose</td>
              <td>24</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Maria</td>
              <td>25</td>
            </tr>
          </table>
        </div>
      ) : (
        <div>
          <form>
            <span>Nome</span>
            <input type="text" placeholder="Nome" />
            <span>Idade</span>
            <input type="text" placeholder="Idade" />
          </form>
        </div>
      )}
    </>
  );
}

export default App;
