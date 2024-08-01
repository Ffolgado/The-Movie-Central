module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist', // Cambia esto a la ruta de tu directorio de distribución
      url: ['http://localhost'], // URL a analizar
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
