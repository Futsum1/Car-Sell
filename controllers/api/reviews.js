const Car = require('../models/car');


module.exports = {
  create,
  delete: deleteReview,
};

function deleteReview(req, res) {
    Car.findOne({'reviews._id': req.params.id}, function(err, car) {
        const reviewSubdoc = car.reviews.id(req.params.id);
        reviewSubdoc.remove();
        car.save(function(err) {
            res.redirect(`/cars/${car._id}`);
        })
    })
}

function create(req, res) {
    Rent.findById(req.params.id, function(err, car) {
        car.reviews.push(req.body);
        rent.save(function(err) {
            res.redirect(`/cars/${req.params.id}`)
        });
    });
}
