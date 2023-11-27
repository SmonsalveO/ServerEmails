const { exec } = require('child_process');
const server = new require('./server');
exec('npm install', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar npm install: ${error}`);
    return;
  }

  console.log(stdout);

  server.listen(4000, () => {
    console.log('El servidor está escuchando en el puerto 4000');
  });
});

server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});