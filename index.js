const server = new require('./server');
server.listen(4000, () => {
  console.log('Server is listening on port 4000');
});