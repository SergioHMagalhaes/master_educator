# Master Educator

[![LinkedIn][linkedin-badge]][linkedin-url]
<div align="center">
    <img src="front-end/src/assets/logo.svg" alt="Logo"  style="width: 200px">
</div>

</br>

<img src="front-end/src/assets/img/capa.jpg" alt="Screenshot" >

</br>

> Trabalho A3 da UC de Inovação, sustentabilidade e competitividade empresarial.

</br>

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* [![Node][NodeJs]][NodeUrl]
* [![Postgre][PostgreSQL]][PostgreUrl]

Esse projeto é subdividido em duas partes: o back-end e o front-end. 
Siga as instruções de "Setup Back-end" e "Setup Front-end"

## 🚀 Setup Back-end

Clone este repositório para a sua maquina

1 - Acesse a pasta:
```
.\back-end
```
2- Instale as dependências:

```
npm i
```
3 - Edite o arquivo de configuração do Banco de Dados de acordo com as configurações locais. `Encontre o arquivo em /database/config/config.json`

4 - No terminal acesse a pasta database
```
cd database/
```
5- configure seu banco de dados
```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```
6 - Volte para a pasta back-end
```
cd ..
```
7- Renomeie o arquivo `.env.example ` para ` .env ` e configure as variáveis de ambiente <br>
8- Execute a aplicação:
```
npm start
```

## 📰 Setup Front-end

1 - Acesse a pasta:
```
cd front-end/
```
2- Instale as dependências:

```
npm i
```
3 - Execute a aplicação
```
npm run serve
```
4 - Acesse o sistema no link `http://127.0.0.1:8080/`

## Tecnologias utilizadas
* [![Node][NodeJs]][NodeUrl]
* [![Postgre][PostgreSQL]][PostgreUrl]
* [![Vue][Vue.js]][VueUrl]

[⬆ Voltar ao topo](#master-educator)<br>



[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/sergiohmagalhaes/
[NodeJs]: https://img.shields.io/badge/Node.js-V18-43853D?style=for-the-badge&logo=node.js&logoColor=white
[NodeUrl]: https://nodejs.org/en/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-V14-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreUrl]: https://www.postgresql.org/
[Vue.js]: https://img.shields.io/badge/vuejs-V3-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D
[VueUrl]: https://vuejs.org/
