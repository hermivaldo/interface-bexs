import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Formulario from "../comum/Formulario";
import 'moment/locale/pt-br';
import Loader from '../comum/Loader';
import PainelRespostas from './PainelRespostas';
import axios from "axios";

class PaginaResposta extends Component {

    state = {
        respostas: [],
        loader: false,
        url: window.RUNTIME_API_HOST == null ? "http://localhost:9090/api/v1" : `${window.RUNTIME_API_HOST}`,
        pergunta: this.props.location.state.pergunta
    };

    getRespostas = async () => {
        this.setState({loader: true})
        try {
            const respostas = await axios.get(`${this.state.url}/${this.state.pergunta.perguntaId}/resposta`);
            this.setState({respostas : respostas.data, loader: false});            
        } catch (error) {
            this.setState({respostas : [], loader: false});  
            this.setState({loader: false});  
        }
        
    };

    componentWillMount(){
        this.getRespostas();
    }

    cadastrar = async (resposta) => {
        this.setState({loader: true});
        resposta.perguntaId = this.state.pergunta.perguntaId;
        await axios.post(`${this.state.url}/${this.state.pergunta.perguntaId}/resposta`, resposta); 
        this.getRespostas();
    }

    
    votar = async (resposta) => {
        this.setState({loader: true});
        await axios.put(`${this.state.url}/${this.state.pergunta.perguntaId}/resposta/${resposta.respostaId}`); 
        this.getRespostas();
    }


    
    delete = async (resposta) => {
        this.setState({loader: true});
        await axios.delete(`${this.state.url}/${this.state.pergunta.perguntaId}/resposta/${resposta.respostaId}`); 
        this.getRespostas();
    }

    render() {
        if (this.props.location.state == null) {
            return <Redirect to='/' />
        } 

        const pergunta = this.props.location.state.pergunta;
       
        return (
         
            <div className="margin-card">
                <Formulario cadastrar={this.cadastrar} textoinput={"Resposta"}></Formulario>
                {this.state.loader ? <Loader></Loader> : ""}
                <br/>
                <PainelRespostas pergunta={pergunta} delete={this.delete} votar={this.votar} respostas={this.state.respostas} ></PainelRespostas>
            </div>
        )
    }
}

export default PaginaResposta;