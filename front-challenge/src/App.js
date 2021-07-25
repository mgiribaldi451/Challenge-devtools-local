import React from "react";
import Grilla from "./views/vget";
import Metricas from "./views/metrics";


/**
 * Se muestra el menu y se inicializa la vista con la grilla del total de alertas
 * En caso de tocar el boton Top 3 se renderiza la visualizacion del top 3
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actual: "getServers",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <nav className="navbar">
            <ul className="navbar__lista">
              <li className="navbar__item">
                <button onClick={() => this.setState({ actual: "getServers" })}>
                  Home
                </button>
              </li>
              <li className="navbar__item">
                <button onClick={() => this.setState({ actual: "getMetricas" })}>
                  Top 3 Server Alerts
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bodyContainer">
          {this.state.actual === "getServers" && <Grilla  />}
          
          {this.state.actual === "getMetricas" && <Metricas />}
        </div>
      </div>
    );
  }
}

export default App;
