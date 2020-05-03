import React, { Component } from "react";
import Formulario from '../comum/Formulario';
import axios from "axios";
import Loader from '../comum/Loader';
import '../app.css'
import PainelPergunta from "./PainelPergunta";

class PaginaPergunta extends Component {
    state = {
        perguntas: [],
        loader: false,
        url: window.RUNTIME_API_HOST == null ? "http://localhost:9090/api/v1/pergunta" : `${window.RUNTIME_API_HOST}/pergunta`
    };

    getPerguntas = async () => {
        this.setState({loader: true})
        try {
            const perguntas = await axios.get(this.state.url);
            this.setState({perguntas : perguntas.data, loader: false});            
        } catch (error) {
            this.setState({perguntas : [], loader: false});  
            this.setState({loader: false});  
        }
        
    };
    
    deletePergunta = async (perguntaId) => {
        this.setState({loader: true});
        await axios.delete(`${this.state.url}/${perguntaId}`);
        this.getPerguntas();
    }

    componentWillMount(){
        this.getPerguntas();
    }

    
    delete = (perguntaId) => {
        this.deletePergunta(perguntaId);
    }

    cadastrar = async (pergunta) => {
        this.setState({loader: true});
        await axios.post(this.state.url, pergunta); 
        this.getPerguntas();
    }

    putVotar = async (perguntaId) => {
        this.setState({loader: true});
        await axios.put(`${this.state.url}/${perguntaId}`);
        this.getPerguntas();
    }    

    votar = (perguntaId) => {
        this.putVotar(perguntaId);
    }

    render(){
        return (
            <div className="margin-card"> 
                <Formulario textoinput={"Pergunta"} cadastrar={this.cadastrar}></Formulario>
                {this.state.loader ? <Loader></Loader> : ""}
                <PainelPergunta perguntas={this.state.perguntas} delete={this.delete} votar={this.votar}></PainelPergunta>   
            </div>
        )
    }
}

export default PaginaPergunta;