import React, { Component } from "react";
import CardResposta from './CardResposta';
import { Message } from 'semantic-ui-react'
import 'moment/locale/pt-br';
import Moment from 'react-moment';

class PainelRespostas extends Component {

    delete = (resposta) => {
        this.props.delete(resposta);
    }

    votar = (resposta) => {
        this.props.votar(resposta);
    }

    render() {
        const {autor, texto, dtCriacao} = this.props.pergunta;
        const respostas = this.props.respostas;
        return (
            <div>
                 <div className="ui message">
                    <div className="header">
                        Pergunta realizada por {autor} em <Moment format="DD/MM/YYYY HH:mm">{dtCriacao}</Moment>
                    </div>
                    {texto}
                </div>
                
                <h3 className="ui dividing header">Respostas</h3>

                <div className="ui divided items">

                    {
                        respostas.map(resposta => {
                            return <CardResposta resposta={resposta} key={resposta.respostaId} delete={this.delete} votar={this.votar}></CardResposta>
                        })
                    }
                    
                    {
                        respostas.length === 0  ? (
                            <Message info>
                                <Message.Header>- Nenhuma resposta localizada. Seja o primeiro a responder.</Message.Header>
                            </Message>
                        ) : ""
                    }
                </div>
            </div>
        );
    }
}

export default PainelRespostas;