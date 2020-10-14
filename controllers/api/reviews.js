const Rent = require('../models/rent');


module.exports = {
  create,
  delete: deleteReview,
};

function deleteReview(req, res) {
    Rent.findOne({'reviews._id': req.params.id}, function(err, rent) {
        const reviewSubdoc = rent.reviews.id(req.params.id);
        reviewSubdoc.remove();
        rent.save(function(err) {
            res.redirect(`/rents/${rent._id}`);
        })
    })
}

function create(req, res) {
    Rent.findById(req.params.id, function(err, rent) {
        rent.reviews.push(req.body);
        rent.save(function(err) {
            res.redirect(`/rents/${req.params.id}`)
        });
    });
}
