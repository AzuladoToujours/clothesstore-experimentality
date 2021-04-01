const app = require('./app');
const { configs } = require('./config/index');

let port = configs.port;
let host = configs.host;
console.log('Testing webhook');
app.listen(port, host, () => {
  console.log(`Server on port http://${host}:${port}`);
});
