import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function E404() {
  return (
    <>
      <div className="bg">
        <main className="bsod container">
          <h1 className="neg title">
            <span className="bg-span">Error - 404</span>
          </h1>
          <p>Ocorreu um erro ao acesar {useLocation().pathname} :</p>
          <p>
            * Retorne a página inicial.
          <br />
          </p>
          <nav className="nav404">
            <Link to="/" className="link404">
              Início
            </Link>
            &nbsp;
          </nav>
        </main>
      </div>
    </>
  );
}

export default E404
