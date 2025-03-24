const express = require("express");
const app = express();
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/db_usuario";
const swaggerJsdoc = require('swagger-jsdoc'); // Certifique-se de que está importado
const swaggerUi = require('swagger-ui-express');
const userRoutes = require ('./routes/userRoutes.js')


// Middleware para permitir requisições com JSON
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {console.log("Conectado ao MongoDB")})
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });


const port = 3000;

// Configuração do Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0', // ou a versão que você deseja usar
    info: {
      title: 'API de Usuários',
      version: '1.0.0',
      description: 'API para gerenciamento de usuários',
    },
  },
  apis: ['./routes/userRoutes.js'],  // Caminho para o arquivo de rotas que contém as documentações
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Usar o Swagger UI para exibir a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usar as rotas existentes
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
