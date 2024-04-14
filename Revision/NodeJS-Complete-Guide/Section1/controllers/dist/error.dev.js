"use strict";

exports.get4O4 = function (req, res, next) {
  res.status(404).render('4O4', {
    pageTitle: 'Page Not Found',
    path: '/4O4'
  });
};