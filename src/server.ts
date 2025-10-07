import { app } from './app';

process.on('uncaughtException', (err) => {
  console.error('Erro não tratado:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Promessa rejeitada sem tratamento:', reason);
  process.exit(1);
});

const porta = process.env.PORT || 5000;

const server = app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('Servidor encerrado.');
});