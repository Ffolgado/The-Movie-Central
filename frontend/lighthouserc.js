module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist', // Cambia a la carpeta donde se aloja tu aplicación después de build
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
