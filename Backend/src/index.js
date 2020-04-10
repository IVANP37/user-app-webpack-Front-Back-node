const app = require ('./app');
const {connect} = require('./database');

async function main(){


// Database conneted
   await connect();

// begin express   
   await app.listen(4000);
   console.log('Server on port 4000: connected  ') 
}
main();
