import React, { Component } from "react";
import CardPergunta from './CardPergunta';
import { Message } from 'semantic-ui-react'

class PainelPergunta extends Component {

    delete = (perguntaId) => {
        this.props.delete(perguntaId);
    }

    votar = (perguntaId) => {
        this.props.votar(perguntaId);
    }

    render() {
        const perguntas = this.props.perguntas;
        return (
            <div>
                <div className="ui cards margin-card">
                    {
                        perguntas.map(pergunta => {
                            return <CardPergunta pergunta={pergunta} key={pergunta.perguntaId} delete={this.delete} votar={this.votar} />
                        })
                    }
                </div>
                {
                    perguntas.length === 0  ? (
                        <Message info>
                            <Message.Header>Nenhuma pergunta registrada</Message.Header>
                        </Message>
                    ) : ""
                }
            </div>
        );
    }
}

export default PainelPergunta;