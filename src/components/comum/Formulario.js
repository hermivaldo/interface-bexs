import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Button } from 'semantic-ui-react';


class Formulario extends Component {

  state = { autor: '', texto: '' }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    this.props.cadastrar(this.state);
    this.setState({ autor: '', texto: '' })
  }

  render() {

    const { autor = '', texto = '' } = this.state
    const textoinput = this.props.textoinput;
    
    return (
      <Form className="ui unstackable form" ref="form" onSubmit={this.handleSubmit} >
        <div className="two fields">
          <Input
            type="text"
            label="Autor"
            name='autor'
            value={autor}
            className="ui input"
            inline="true"
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['Não é possível fazer perguntas de modo anônimo.']}
            width={6}
          />
          <Input
            type="text"
            inline="true"
            className="ui input"
            name='texto'
            label={textoinput}
            value={texto}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['É preciso fazer sua pergunta']}
            width={6}
          />

         
        </div>
        <Button color="teal">Cadastrar</Button>
      </Form>
    );
  }
}

export default Formulario;