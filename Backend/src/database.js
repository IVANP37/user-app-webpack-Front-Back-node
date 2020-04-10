const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb://localhost/flutter-node-tutorial',{
        useNewUrlParser :true//para evitar advertencias por pantalla
    })
    console.log('DATABASE: CONECCTED');
} 
module.exports = {connect}