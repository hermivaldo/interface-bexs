import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './app.css'
import PaginaPergunta from "./pergunta/PaginaPergunta";
import PaginaResposta from "./resposta/PaginaResposta";

function Container({ location }) {
  return (
    
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={PaginaPergunta} />
              <Route path="/resposta" component={PaginaResposta} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    
  );
}



export default withRouter(Container);
