const Rent = require('../models/rent');
const { render } = require('../server');

module.exports = {
  index,
  show,
  new: newRent,
  create,
  delete: deleteOrder,
  edit,
  update
};

const BOOK = {
  toyota: 20,
  nissan: 25,
  honda: 25,
  mercedes: 15,
  kia: 10,
  tesla: 30
}

function deleteOrder(req, res) {
   Rent.findByIdAndDelete(req.params.id, function(err) {
   res.redirect('/orders');
  });
}


function edit(req, res) {
  Rent.findById(req.params.id, function(err, rent) {
  res.render('rents/edit', { rent });
 });
}

function update(req, res) {
    Rent.findByIdAndUpdate(req.params.id, req.body, function(err, rent) {
    

    rent.save(function(err){
      res.redirect(`/rents/${req.params.id}`);
    })
  });
  
}

function create(req, res) {
  const rent = new Rent({
    car: req.body.car,
    price: BOOK[req.body.car],
    // tip: req.body.tip,
    // quantity: req.body.quantity
  });
  rent.user = req.user._id;
  
  rent.save(function(err) {
      if (err) return res.render('rents/new');
      res.redirect(`/rents`);
  });
  }
  
function show(req, res){
    Rent.findById(req.params.id, function(err, rent){
    res.render('rents/show',{title: 'Rents Detail',  rent});
})
}

function newRent(req, res) {
  res.render('rents/new');
}

function index(req, res) {
    Rent.find({}, function(err, rents) {
    res.render('rents/index', {rents});
  })
}

function showReview(req,res){
};  
