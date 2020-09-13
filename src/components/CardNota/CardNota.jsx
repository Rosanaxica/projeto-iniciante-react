import React, { Component } from 'react';
import  './style.css';


class CardNota extends Component {
   
    render() { 
        return (<section className="card-nota">
            <header>
    <h3>{this.props.titulo}</h3>
              <p>{this.props.nota}</p>
            </header>
          </section>  );
    }
}
export default  CardNota
