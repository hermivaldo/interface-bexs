# INTERFACE WEB BEXS

Projeto desenvolvido em React e Docker.

## Notas

* Nunca trabalhei com React ou Docker
* Esse projeto precisa receber uma API como parâmetro de entrada ('-e API_HOST=http://localhost:9090/api/v1')
* Queria criar algo que não tivesse nenhum vínculo com o que trabalhava até mesmo para testar meus conhecimentos.
* Agradeço pela oportunidade e como qualquer projeto sempre pode haver melhorias.
* Esse projeto não tem testes (mas deveria).

## Começando

As instruções a seguir devem ser realizadas após uma cópia desse projeto para sua máquina.

### Pré-requisitos

Node ou Docker com container Linux

### Instalação

Para compilar o projeto para o container Docker entre no diretório do projeto e execute o seguinte comando:

```
docker build -t app-react .
```

verifique se foi criada uma imagem para o projeto com o comando. 

```
docker images
```

É esperado uma saída semelhante com essa:

```
app-react     latest     d0ac5f893767      7 minutes ago       28.9MB
```

É necessário ter o projeto da API que está em 'https://github.com/hermivaldo/APIBexs'.

O endereço (localhost:9090) é do container do projeto descrito no link superior. 

```
docker run -e API_HOST=http://localhost:9090/api/v1 -p  3001:80 app-react:latest
```

Com isso o container será criado e basta ir no navegador e digitar 

```
http://localhost:3001/
```

Será aberto o projeto desenvolvido em React.

