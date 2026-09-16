# Tela de Login - Angular

Trabalho da faculdade: tela de login feita como componente no Angular.

## O que a tela faz

- Campos de E-mail e Senha.
- Botao ENTRAR: pega os dados digitados, manda para o TypeScript e imprime no console (F12 > Console).
- Link "Esqueci a senha": abre a tela para digitar o e-mail e receber o link de recuperacao (tambem imprime no console).
- Link "Criar conta": abre a tela de cadastro com Nome, E-mail e Senha (tambem imprime no console).

## Arquivos principais

- `src/app/login/login.ts` - logica do componente (funcoes entrar, criarConta e recuperarSenha).
- `src/app/login/login.html` - tela.
- `src/app/login/login.css` - estilos.
- `src/app/app.html` - usa o componente `<app-login></app-login>`.

## Como rodar

```
npm install
ng serve
```

Depois abrir http://localhost:4200 no navegador e apertar F12 para ver o console.
