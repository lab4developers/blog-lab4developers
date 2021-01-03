# Blog Lab4Developers

Esse projeto é o funcionamento de um blog, o Lab4Developers, que tem como objetivo apresentar artigos e tutoriais para todo dev. A ideia principal é ser como um verdadeiro laboratório, apresentando tutoriais e assuntos para iniciantes e mostrando testes que podem ajudar no desenvolvimento de um projeto.

Também deseja-se descrever os projetos realizados. Tudos isso para um melhor aprendizado dos assuntos propostos, tanto por quem escreve, como por quem lê.

## Pré Requisitos

Esse é um projeto **Gatsby**, framework React, que permite a geração de páginas estáticas.

Além disso, é utilizado como backend o **Strapi**. Uma plataforma aberta que tem como objetivo ser um Headless CMS.

Outra tecnologia importante utilizada foi o **Tailwind CSS** como framework CSS. Ele nos possibilita uma grande facilidade para estilizar as nossas páginas e componentes.

Os pacotes foram adicionados usando o **yarn**. Assim, todos os comandos apresentados é utilizado esse gerenciador de pacotes npm.

### Instalação do Tailwind CSS

Foi seguido o tutorial do Tailwind apresentado na página do próprio framework disponível [aqui]("https://tailwindcss.com/docs/guides/gatsby").

```shell
  yarn add gatsby-plugin-postcss tailwindcss@latest \
           postcss@latest autoprefixer@latest

  npx tailwindcss init -p
```

### Instalação do Strapi

O Strapi foi instalado e foi criado um projeto para servir como Backend (esse estará sendo colocado no GitHub também com o tutorial de montagem).

Precisamos instalar o plugin do strapi e para isso, fazemos:

```shell
  yarn add gatsby-source-strapi
```

Depois, ajustamos o nosso arquivo *gatsby-config.js* de acordo com as instruções da página de instalação do plugin disponível [aqui](https://www.gatsbyjs.com/plugins/gatsby-source-strapi/).

No caso desse projeto, usamos um arquivo ".env" com as variáveis de ambiente e colocamos um require e adicionamos uma condição no nosso *gatsby-config.js*.

### Outras instalações

Também foram instalados alguns outros pacotes necessários para utilização dos recursos do Strapi e transformação do conteúdo do formato MarkDown para o formato HTML. Assim, adicionamos:

```shell
  yarn add react-markdown react-moment moment
```

Foi instalado os componentes de imagem. Assim, foi rodado o comando:

```shell
  yarn add gatsby-source-filesystem gatsby-transformer-sharp gatsby-plugin-sharp gatsby-image
```
