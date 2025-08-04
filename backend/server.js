require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Ligado ao MongoDB Atlas'))
  .catch((err) => console.error('Erro ao ligar ao MongoDB:', err));

app.listen(process.env.PORT, () => {
  console.log(`Servidor a correr na porta ${process.env.PORT}`);
});
