const {Schema, model}=require('mongoose');

const userSchema = new Schema({// creando la estructura de una tabla
    firtName:{ type: String, required: true },
    lastName :{ type: String, required: true },
    avatar : { type: String, required: true },
})
module.exports = model('Users',userSchema);// creo la tabla y le digo la estrutura que debe tener que corresponde a el esquema ya creado
