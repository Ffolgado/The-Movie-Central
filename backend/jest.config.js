module.exports = {
  testEnvironment: "node", // Puedes configurar tu entorno aquí
  testPathIgnorePatterns: ["/node_modules/"],
  setupFiles: ["<rootDir>/jest.setup.js"], // Aquí puedes cargar variables de entorno si es necesario
  globals: {
    ENV: "DEV", // Puedes cambiar esto a 'STAGE', 'PROD', etc.
  },
  testSequencer: "./testSequencer.js" // Opcional si deseas ordenar los tests
};
