exports.notFound = function(req, res, next) {
  res.status(404);
  res.render('404')
};

exports.serverError = function(error, req, res, next) {
  res.status(500);
  res.render('500', {error: error})
};
