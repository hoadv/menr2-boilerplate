module.exports = function (app) {
  // grab the todo model we just created
  var Todos = require('../models/todo');

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // SHOW
  app.get('/api/todos', function (req, res) {
    // use mongoose to get all Todos in the database
    Todos.find(function (err, data) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(data); // return all Todos in JSON format
    });
  });

  // get all items from mongodb
  app.get('/api/todo/:id', function (req, res) {
    var id = req.params.id;
    console.log('/api/todo/:id');
    Todos.findById(id, function (err, data) {
      console.log(data);
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });

  });


  // CREATE
  app.post('/api/todos', function (req, res) {
    var formtodo = {
      text: req.body.text,
      completed: req.body.completed
    };

    let newtodo = new Todos(formtodo);
    try {
      newtodo.save();
    } catch (ex) {
      throw ex;
    }
  });

  // UPDATE
  app.post('/api/edit', function (req, res) {
    Todos.findById(req.body._id, function (err, data) {
      if (err) {
        res.send(err);
      } else {
        var formtodo = {
          text: req.body.text,
          completed: req.body.completed
        };
        let newtodo = new Todos(formtodo);
        try {
          newtodo.save();
        } catch (ex) {
          throw ex;
        }
      }
    });
  });
};