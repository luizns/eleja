import 'dotenv/config';
import app from './app';

app.listen(process.env.API_PORT, console.log(`Servidor ativo na porta ${process.env.API_PORT}!`));
