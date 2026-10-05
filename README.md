<div align="center">

# Discord-Bot-Template

Um bot de Discord pronto para funcionar. Você só preenche suas informações e coloca no ar.

![Node.js](https://img.shields.io/badge/Node.js-LTS-9B59B6?style=flat-square&labelColor=1A0A2E)
![discord.js](https://img.shields.io/badge/discord.js-v14-9B59B6?style=flat-square&labelColor=1A0A2E)
![Licença](https://img.shields.io/badge/licença-MIT-9B59B6?style=flat-square&labelColor=1A0A2E)

</div>

## O que é

Este projeto é a base de um bot de Discord. Ele já vem organizado, com dois comandos de exemplo e com os cuidados básicos de segurança prontos.

Você não precisa saber programar para colocá-lo para funcionar. Basta seguir os passos abaixo, na ordem. Leva de 15 a 20 minutos.

Depois que ele estiver funcionando, você pode criar seus próprios comandos a partir dos exemplos.

## O que você vai precisar

- Um computador com Windows, macOS ou Linux
- Uma conta no Discord
- Um servidor no Discord em que você seja dono ou administrador (pode criar um só para testes)
- Conexão com a internet

## Passo a passo

### 1. Instale o Node.js

O Node.js é o programa que faz o bot funcionar no seu computador.

1. Acesse [nodejs.org](https://nodejs.org).
2. Baixe a versão marcada como **LTS**.
3. Abra o arquivo baixado e clique em "Avançar" até terminar. Não é preciso mudar nenhuma opção.

Para confirmar que deu certo, abra o terminal e digite:

```bash
node --version
```

Se aparecer um número de versão, como `v22.0.0`, está instalado.

> **Como abrir o terminal**
> No Windows, aperte a tecla Windows, digite `cmd` e aperte Enter.
> No macOS, abra o Spotlight (Command + Espaço), digite `Terminal` e aperte Enter.

### 2. Baixe este projeto

1. No topo desta página, clique no botão verde **Use this template** e depois em **Create a new repository**. Isso cria uma cópia do projeto na sua conta.
2. Se você não tem conta no GitHub, clique em **Code** e depois em **Download ZIP**.
3. Se baixou o ZIP, extraia o arquivo em uma pasta fácil de achar, como a Área de Trabalho.

### 3. Abra o terminal dentro da pasta do projeto

- **Windows:** abra a pasta do projeto, clique na barra de endereço no topo da janela, digite `cmd` e aperte Enter.
- **macOS:** clique com o botão direito na pasta e escolha "Novo Terminal na Pasta".

### 4. Instale as dependências

Dependências são os componentes de que o bot precisa para funcionar. No terminal, digite:

```bash
npm install
```

Espere terminar. Vai aparecer uma pasta chamada `node_modules`. Isso é o esperado.

### 5. Crie o seu bot no Discord

1. Acesse o [Portal de Desenvolvedores do Discord](https://discord.com/developers/applications) e entre com a sua conta.
2. Clique em **New Application**.
3. Dê um nome ao seu bot, aceite os termos e clique em **Create**.
4. Na página que abrir, copie o número que aparece em **Application ID**. Guarde em um bloco de notas. Você vai usar no passo 7.

### 6. Pegue o token do bot

O token é a senha do seu bot. Quem tem o token controla o bot.

1. No menu da esquerda, clique em **Bot**.
2. Clique em **Reset Token** e confirme.
3. Clique em **Copy** e guarde o token no bloco de notas.

O token aparece uma única vez. Se você perder, repita este passo para gerar outro.

**Nunca mostre o token para ninguém e nunca o publique na internet.**

### 7. Preencha suas informações

1. Na pasta do projeto, encontre o arquivo `.env.example`.
2. Faça uma cópia dele e renomeie a cópia para `.env` (apenas isso, sem mais nada no nome).
3. Abra o arquivo `.env` com o Bloco de Notas.
4. Preencha assim, sem espaços e sem aspas:

```env
DISCORD_TOKEN=cole_aqui_o_token_do_passo_6
CLIENT_ID=cole_aqui_o_application_id_do_passo_5
GUILD_ID=cole_aqui_o_id_do_seu_servidor
```

5. Salve e feche o arquivo.

> **Como descobrir o ID do seu servidor**
> No Discord, vá em Configurações de Usuário, depois em Avançado, e ative o **Modo desenvolvedor**. Em seguida, clique com o botão direito no ícone do seu servidor e escolha **Copiar ID do servidor**.

> **Não está vendo o arquivo `.env.example`?**
> Arquivos que começam com ponto podem ficar ocultos. No Windows, abra a pasta, clique em **Exibir** e marque **Itens ocultos**. No macOS, aperte Command + Shift + ponto.

### 8. Convide o bot para o seu servidor

1. No Portal de Desenvolvedores, clique em **OAuth2** no menu da esquerda.
2. Em **OAuth2 URL Generator**, marque as caixas **bot** e **applications.commands**.
3. Na lista de permissões que aparecer, marque **Send Messages** e **Use Slash Commands**.
4. Copie o endereço que aparece no fim da página.
5. Cole esse endereço no navegador, escolha o seu servidor e clique em **Autorizar**.

O bot vai aparecer na lista de membros do servidor, ainda desligado.

### 9. Registre os comandos

Este passo avisa ao Discord quais comandos o seu bot tem. No terminal, digite:

```bash
npm run registrar
```

Deve aparecer uma mensagem dizendo que os comandos foram registrados.

### 10. Ligue o bot

```bash
npm start
```

Quando aparecer a mensagem de que o bot está no ar, ele fica com a bolinha verde no Discord.

### 11. Teste

No seu servidor, digite `/ping` e aperte Enter. Se o bot responder, está tudo funcionando.

Para desligar o bot, volte ao terminal e aperte **Ctrl + C**.

O bot só funciona enquanto o terminal estiver aberto e o computador ligado. Para deixá-lo no ar o tempo todo, é preciso hospedá-lo em um servidor.

## Configuração

| Variável | Obrigatória | Descrição |
| :-- | :-: | :-- |
| `DISCORD_TOKEN` | Sim | A senha do bot (passo 6) |
| `CLIENT_ID` | Sim | O Application ID do bot (passo 5) |
| `GUILD_ID` | Sim | O ID do servidor onde você vai testar (passo 7) |

## Estrutura do projeto

```
discord-bot-template/
├── src/
│   ├── comandos/
│   │   ├── ping.js
│   │   └── ajuda.js
│   ├── eventos/
│   │   ├── ready.js
│   │   └── interactionCreate.js
│   ├── index.js
│   └── registrar-comandos.js
├── .env.example
├── .gitignore
└── package.json
```

| Pasta ou arquivo | Para que serve |
| :-- | :-- |
| `src/comandos/` | Cada arquivo aqui é um comando do bot |
| `src/eventos/` | O que o bot faz quando algo acontece, como ser ligado ou receber um comando |
| `src/index.js` | O arquivo que liga o bot |
| `src/registrar-comandos.js` | Envia a lista de comandos para o Discord |
| `.env.example` | Modelo do arquivo onde ficam as suas informações |
| `.gitignore` | Lista do que nunca deve ser publicado, como o seu `.env` |

## O que alterar

- **Nome e foto do bot:** no Portal de Desenvolvedores, na aba **Bot**.
- **Criar um comando novo:** copie o arquivo `src/comandos/ping.js`, mude o nome do arquivo, o nome do comando e a resposta. Depois rode `npm run registrar` de novo e reinicie o bot.
- **Mudar a resposta de um comando:** edite o texto dentro do arquivo do comando e reinicie o bot.

Sempre que você alterar um arquivo, desligue o bot com **Ctrl + C** e ligue de novo com `npm start`.

## Segurança

O que este projeto já faz por você:

- O token fica no arquivo `.env`, separado do código.
- O arquivo `.env` está no `.gitignore`, então não é enviado ao GitHub por engano.
- O bot pede apenas as permissões de que precisa.
- Quando um comando dá erro, o usuário recebe uma mensagem genérica, sem detalhes internos.

O que depende de você:

- Nunca envie o token para ninguém, nem em print de tela.
- Nunca dê a permissão **Administrator** ao bot sem necessidade.
- Se o token vazar, volte ao passo 6 e clique em **Reset Token** imediatamente. O token antigo para de funcionar na hora.

## Problemas comuns

**"An invalid token was provided"**
O token no `.env` está errado. Confira se você copiou inteiro, sem espaços e sem aspas. Se continuar, gere outro no passo 6.

**"Cannot find module"**
Faltou instalar as dependências. Rode `npm install` dentro da pasta do projeto.

**"'npm' não é reconhecido como um comando"**
O Node.js não está instalado ou o terminal foi aberto antes da instalação. Feche o terminal, abra de novo e repita o passo 1.

**O comando `/ping` não aparece no Discord**
Rode `npm run registrar` de novo e confira se o `GUILD_ID` é o do servidor onde você está testando. Feche e abra o Discord se ainda não aparecer.

**"Missing Access"**
O bot não foi convidado com a caixa **applications.commands** marcada. Refaça o passo 8.

**O bot aparece desligado**
O terminal foi fechado ou o `npm start` não está rodando. Abra o terminal na pasta do projeto e rode `npm start`.

## Projetos relacionados

- **discord-bot-modulos:** mecânicas prontas para adicionar ao seu bot (em breve)
- **discord-bot-guia:** como proteger e hospedar o seu bot (em breve)

## Licença

MIT. Feito por [Terra](https://github.com/Terra47).
