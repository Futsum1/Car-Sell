const Sell = require('../models/sell');
// const { render } = require('../server');

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
   Sell.findByIdAndDelete(req.params.id, function(err) {
   res.redirect('/sells');
  });
}


function edit(req, res) {
  Sell.findById(req.params.id, function(err, sell) {
  res.render('Sells/edit', { sell });
 });
}

function update(req, res) {
  Sell.findByIdAndUpdate(req.params.id, req.body, function(err, sell) {
    

    sell.save(function(err){
      res.redirect(`/sells/${req.params.id}`);
    })
  });
  
}

function create(req, res) {
  const sell = new Sell({
    car: req.body.car,
    price: BOOK[req.body.car],
    
  });
  sell.user = req.user._id;
  
  sell.save(function(err) {
      if (err) return res.render('sells/new');
      res.redirect(`/sells`);
  });
  }
  
function show(req, res){
  Sell.findById(req.params.id, function(err, sell){
    res.render('sells/show',{title: 'Sells Detail',  sell});
})
}

function newRent(req, res) {
  res.render('sells/new');
}

function index(req, res) {
  Sell.find({}, function(err, sells) {
    res.render('sells/index', {sells});
  })
}

function showReview(req,res){
};  
