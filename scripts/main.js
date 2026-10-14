const { createApp } = Vue;

    createApp({
      data() {
        return {
          produtos: []
        };
      },
      async mounted() {
        const resposta = await fetch('produtos.json');
        this.produtos = await resposta.json();
      },
      methods: {
        formatarNome(nome) {
          return nome.replaceAll('_', ' ');
        },
        formatarPreco(valor) {
          return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          });
        }
      }
    }).mount('#app');