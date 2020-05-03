
import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import { Button, Modal } from 'semantic-ui-react';
import { Link } from "react-router-dom";

class CardPergunta extends Component {

    state = { open: false }

    closeConfigShow = () => () => {
        this.setState({ open: true })

    }

    close = () => this.setState({ open: false });

    delete = () => {

        this.props.delete(this.props.pergunta.perguntaId);
        this.close();
    };

    votar = () => {
        this.props.votar(this.props.pergunta.perguntaId);
    }

    render() {

        const { qtdVotos, qtdRespostas, autor, texto, dtCriacao } = this.props.pergunta;
        const pergunta = this.props.pergunta;
        const { open, closeOnEscape, closeOnDimmerClick } = this.state;
        return (
            <>
                <div className="card green ">
                    <div className="content">
                        <i className="right floated trash  like alternate outline icon" onClick={this.closeConfigShow(true, false)}></i>
                        <div className="floated meta">

                            <Moment format="DD/MM/YYYY HH:mm">
                                {dtCriacao}
                            </Moment>
                        </div>{autor}
                        <div className="description trunc-text">
                            {texto}
                        </div>
                    </div>
                    <div className="content">

                        <Link to={{
                            pathname: '/resposta',
                            state : {
                                pergunta
                            }
                        }}>
                            <i className="comment icon" ></i>
                        {qtdRespostas === 1 ? qtdRespostas + " Comentário" : qtdRespostas + " Comentários"}
                        </Link>

                        <span className="right floated">
                                <i className="heart outline like icon" onClick={this.votar}></i>
                                {qtdVotos === 1 ? qtdVotos + " like" : qtdVotos + " Likes"}
                            </span>
                        
                    </div>
                </div>

                <Modal open={open} closeOnEscape={closeOnEscape} closeOnDimmerClick={closeOnDimmerClick} onClose={this.close}>
                    <Modal.Header>Excluir Pergunta</Modal.Header>
                    <Modal.Content>
                        <p>Ao excluir uma pergunta você estará exluindo todas as suas respostas, deseja continuar?</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close} negative> Não </Button>
                        <Button
                            onClick={this.delete}
                            positive
                            labelPosition='right'
                            icon='checkmark'
                            content='Sim'
                        />
                    </Modal.Actions>
                </Modal>
            </>
        );
    }
}

export default CardPergunta;