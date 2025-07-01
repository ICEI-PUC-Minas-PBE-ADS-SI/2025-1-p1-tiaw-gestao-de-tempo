# Código-fonte


Esta é a pasta destinada à manutenção do programa que será desenvolvido no contexto desta disciplina.

Se necessário, deve-se descrever neste arquivo os aspectos relevantes da estrutura de diretórios criada para a organização do código.

Uma sugestão para a estrutura de diretórios do projeto é a seguinte:

```plaintext
src/  (esta pasta aqui)
│
├── db/
│   └── db.json (estruturas de dados)
│
├── public/ (seu site - front-end)
│   ├── assets/
│   │   ├── css/
│   │   │   ├── styles.css
│   │   │   └── (outros arquivos .css)
│   │   │
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   └── (outros arquivos .js)
│   │   │
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   └── (outras imagens)
│   │   │
│   │   └── fonts/
│   │       ├── font1.ttf
│   │       └── (outras fontes)
│   │
│   ├── modulos/
│   │   ├── modulo-1/
│   │   │   └── (arquivos do módulo)
│   │   │
│   │   └── modulo-2/
│   │       └── (arquivos do módulo)
│   │
│   ├── index.html (página inicial front-end)
│   ├── about.html
│   ├── contact.html
│   └── (outras páginas)
│
│── index.js (app back-end)
│── package.json (configuração back-end)
└── README.md (este arquivo aqui)
```

## Parte front-end

Para a montagem do site, devem ser editados os arquivos existentes e criados novos arquivos na pasta `public`, que abriga todos os componentes da interface do front-end, visíveis ao usuário no navegador.

Na pasta `public`, sugere-se a seguinte organização dos arquivos do site:

* Pasta `assets`: destinada aos arquivos de formatação (CSS), scripts (JS), imagens utilizadas no site (JPG, PNG, GIF, SVG etc.), fontes (TTF) e outros arquivos gerais utilizados por todo o site.
* Pasta `modulos`: onde devem ser armazenados os arquivos relacionados à implementação das funcionalidades do site. Recomenda-se criar uma subpasta para cada novo módulo ou funcionalidade, o que também pode facilitar a divisão do trabalho entre os membros do grupo.
* Arquivo `index.html`: arquivo que representa a "home page" do site.

## Parte back-end

Para este projeto, será utilizado o ambiente de execução **[Node.js](https://nodejs.org/)** para montar um back-end simplificado, porém eficaz, que utiliza o módulo **[JSON Server](https://github.com/typicode/json-server#readme)**. Não se preocupe, não é necessário ter conhecimento em programação para o ambiente Node.js, nem é preciso alterar esses arquivos para que seu site funcione adequadamente.

Na estrutura de arquivos encontram-se, além disso, outra pasta e alguns arquivos, os quais são:

* Pasta `db`: local onde é armazenado o arquivo contendo as estruturas de dados utilizadas pela aplicação. O conteúdo dessa pasta é composto exclusivamente pelo arquivo `db.json`.
* Arquivo `index.js`: arquivo responsável por inicializar o servidor web e a aplicação de back-end no ambiente Node.js, fornecendo uma API RESTful a partir do arquivo `db.json`. Recomenda-se evitar alterações nesse arquivo.
* Arquivo `package.js`: arquivo que contém as configurações da aplicação de back-end.

## Setup e execução do ambiente

Para executar a aplicação de back-end e permitir o acesso ao seu site, é necessário instalar o Node.js em seu computador. Para isso, siga as instruções disponíveis no site do [**Node.js**](https://nodejs.org/), realizando o download da versão LTS (a versão mais estável do ambiente).

Assim que o Node.js estiver instalado em seu computador, deve-se abrir o terminal na pasta do seu projeto e executar o seguinte comando:

```
$> npm install
```

Isso permitirá que o NPM instale todos os pacotes necessários para a execução do back-end. O NPM é o aplicativo responsável por gerenciar as dependências de um projeto e instalar os pacotes do Node.js.

Em seguida, com os pacotes já instalados, basta executar o seguinte comando:

```
$> npm start
```

Isso fará com que o Node.js execute a aplicação de back-end, iniciando o servidor web e a API RESTful fornecida pelo JSON Server a partir do arquivo `db.json`.

## Dúvidas e suporte

Caso tenha dúvidas, recomenda-se procurar a monitoria, que estará disponível para auxiliá-lo(a) a compreender todo o ambiente e a apoiá-lo(a) na implementação do seu projeto.