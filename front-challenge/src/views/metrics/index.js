import React, { Component } from 'react'
//import {getMetrics} from "../../services/api"
import Getmetricas from '../../components/metricGraph'
/**
 * Renderiza el top 3
 */

class Metricas extends Component {
  /*componentDidMount() {
    getMetrics().then(data=>console.log("METRICAS", data))
    
  }*/

  render() {
    return (
      <div>
        <Getmetricas/>
      </div>
    )
  }
}


export default Metricas