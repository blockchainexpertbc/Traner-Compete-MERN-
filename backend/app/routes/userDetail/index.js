const userDetail = require('express').Router();
const UserModel = require('../../models/user');
const UserDetailModel = require('../../models/userDetail');

userDetail.post('/create', (req, res) => {
  const newUserDetail = new UserDetailModel(req.body);

  newUserDetail.save(err => {
    console.log(err);
    res.json(newUserDetail);

    UserModel.findOne({_id: req.body.User}).then(user => {
      user.Details.push(newUserDetail);
      user.save(err => {
        console.log(err)
      }); 
    });
  });

});


userDetail.get('/:userId', (req, res) => {
  UserModel.findOne({_id: req.params.userId})
            .populate('Details')
            .then(user => {
              res.json(user);
            })
})

module.exports = userDetail;
