const user = require('express').Router();
const UserModel = require('../../models/user');
const service = require('../../socket');

user.post('/create', (req, res) => {
  const newUser = new UserModel(req.body);

  newUser.save(err => {
    console.log(err)
    res.send(newUser._id);

    // service.io.emit('createdUser', newUser);
  });

});

user.get('/', (req, res) => {
  UserModel.find().sort({Name: 0}).then(result => {
    console.log(result)
    res.json(result);
  })
})


module.exports = user;
