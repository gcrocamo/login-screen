import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  tela = 'login';

  email = '';
  senha = '';

  novoNome = '';
  novoEmail = '';
  novaSenha = '';

  emailRecuperar = '';

  mensagem = '';

  entrar() {
    console.log('Dados do login:');
    console.log('E-mail: ' + this.email);
    console.log('Senha: ' + this.senha);
    console.log({ email: this.email, senha: this.senha });

    if (this.email == '' || this.senha == '') {
      this.mensagem = 'Preencha o e-mail e a senha.';
    } else {
      this.mensagem = 'Login enviado! Verifique o console (F12).';
    }
  }

  criarConta() {
    console.log('Dados da nova conta:');
    console.log('Nome: ' + this.novoNome);
    console.log('E-mail: ' + this.novoEmail);
    console.log('Senha: ' + this.novaSenha);

    if (this.novoNome == '' || this.novoEmail == '' || this.novaSenha == '') {
      this.mensagem = 'Preencha todos os campos.';
    } else {
      this.mensagem = 'Conta criada! Verifique o console (F12).';
    }
  }

  recuperarSenha() {
    console.log('Recuperar senha do e-mail: ' + this.emailRecuperar);

    if (this.emailRecuperar == '') {
      this.mensagem = 'Digite o seu e-mail.';
    } else {
      this.mensagem = 'Enviamos um link de recuperacao para ' + this.emailRecuperar;
    }
  }

  mudarTela(nome: string) {
    this.tela = nome;
    this.mensagem = '';
  }
}
