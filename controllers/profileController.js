const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateSearches: function(req, res) {
    db.User
      .findOneAndUpdate({ email: req.params.email }, {search: req.params.search})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserSearch: function(req, res) {
    db.User
      .findOne({email: req.params.email})
      .then(dbModel => res.json(dbModel));
  },
  updateMaps: function(req, res) {
    db.User
      .findOneAndUpdate({ email: req.params.email }, {mapBreweries: req.params.mapBreweries})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};