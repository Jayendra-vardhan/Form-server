const axios = require('axios');

const keepAwake = (url) => {
  (function callServer() {
    axios.get(url)
      .then(response => {
        console.log(`Pinged ${url} at ${new Date().toISOString()}`);
      })
      .catch(error => {
        console.error(`Error pinging ${url}: ${error.message}`);
      })
      .finally(() => {
        setTimeout(callServer, 300000); // 5 minutes
      });
  })();
};

keepAwake('https://form-server-shzd.onrender.com/'); 
