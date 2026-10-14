const { createApp } = Vue;

createApp({
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    const response = await fetch('products.json');
    this.products = await response.json();
  },
  methods: {
    formatName(name) {
      return name.replaceAll('_', ' ');
    },
    formatPrice(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    }
  }
}).mount('#app');