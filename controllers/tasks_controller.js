var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});


//router.delete(':person_id/tasks/delete', function(req,res) {
  // Added a router to delete a person
  //if(req.session.user_id == req.param.id) {


 // models.Person.destroy({
   // where: {
   //   id: req.params.id
   // }
  //})
  // connect it to this .then.
  //.then(function() {
  //  res.redirect('/');
  //});
//};
//});

module.exports = router;
