const {Router}= require('express');
const router =Router();
const faker = require('faker');// este modulo permite crear dtaos de prueba para la base de datos
const User = require ('../model/user');

router.get('/api/users',async (req, res) => {
       const users = await User.find();// Busco los datos creados en la base de datos
      res.json(users);// Los retorno a esta ruta cuando se invoke
})

router.get('/api/users/delete/:id',async (req, res) => {
  let { id } = req.params;
  const users = await User.remove({_id: id});
  res.redirect('/api/users');
})
router.get('/api/users/find/:id', async (req, res) => {
  let { id } = req.params;
  const user = await User.findById(id);  
  //await user.save(); 
   res.json(user); 
  //res.redirect('/api/users');
});
router.post('/api/users/edit/:id', async (req, res) => {
  const { id } = req.params;
  const users = await User.update({_id: id}, req.body);
  res.redirect('/api/users');
});
router.post('/api/users/add', async (req, res) => {
  const { firtName, lastName, avatar } = req.body;
  const user = new User( { firtName, lastName, avatar }); 
   await user.save();   
  console.log(user);
  res.json({message :'User add'});

 // res.redirect('/api/users');
});

module.exports=router;