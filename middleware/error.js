exports.notFound = function(req, res, next) {
  res.status(404);
  res.render('404', {error: 'teste'})
};

exports.serverError = function(error, req, res, next) {
  res.status(500);
  res.render('500', {error: error})
};
