const kb = require('./keyboard-buttons');

module.exports = {
  home: [
    [kb.home.films, kb.home.cinemas],
    [kb.home.favorite],
  ],
  films: [
    [kb.home.random],
    [kb.film.action, kb.film.comedy],
    [kb.back],
  ]
}