
import React, { Component } from "react";
import Moment from 'react-moment';
import 'moment/locale/pt-br';
import { Button, Modal } from 'semantic-ui-react';


class CardResposta extends Component {

    state = { open: false }

    closeConfigShow = () => () => {
        this.setState({ open: true })

    }

    close = () => this.setState({ open: false });

    delete = () => {

        this.props.delete(this.props.resposta);
        this.close();
    };

    votar = () => {
        this.props.votar(this.props.resposta);
    }

    render() {


        const { open, closeOnEscape, closeOnDimmerClick } = this.state;
        const { autor, texto, dtCriacao, qtdVotos } = this.props.resposta;
        return (
            <>

                <div className="item">

                    <div className="content">
                    <i className="right floated trash  like alternate outline icon" onClick={this.closeConfigShow(true, false)}></i>
                        <a className="header">{autor} em <Moment format="DD/MM/YYYY HH:mm">{dtCriacao}</Moment></a>
                        <div className="description">
                            <p>{texto}</p>
                        </div>
                        <div className="extra">
                            <span>
                                <i className="heart outline like icon" onClick={this.votar}></i>
                                {qtdVotos} likes
                                </span>
                        </div>
                    </div>
                </div>

                <Modal open={open} closeOnEscape={closeOnEscape} closeOnDimmerClick={closeOnDimmerClick} onClose={this.close}>
                    <Modal.Header>Excluir Resposta</Modal.Header>
                    <Modal.Content>
                        <p>Ao excluir uma resposta você está removendo uma informação importante do sistema, deseja continuar?</p>
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

export default CardResposta;