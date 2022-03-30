const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.allFilmTitles = function() {
    const result = this.films.map((film) =>  {
      return film.title;
    });
    return result;
};

Cinema.prototype.findByTitle = function(title){
  const result = this.films.filter((film) => {
      return film.title === title;
  });
  return result;
}

Cinema.prototype.findByGenre = function(genre){
  const result = this.films.filter((film) => {
    return film.genre === genre;
  })
  return result;
} 

Cinema.prototype.filmsOfYearExist = function(year){
  const result = this.films.some((film) => {
     return film.year == year;
  });
  return result
}


Cinema.prototype.checkLengthOfFilm = function(length){
  const result = this.films.filter((film) =>{
    return film.length >= length;
  });
  return result;
};

Cinema.prototype.lengthOfAllFilms = function(){
  const total = this.films.reduce((totalTime, film) => {
      return totalTime + film.length;
  }, 0);
  return total;
};

//extention-
Cinema.prototype.findByYear = function(year){
  const result = this.films.filter((film) =>{
  return film.year === year;

  });
  return result;
}

Cinema.prototype.filmsByProperty = function(searchProperty, searchValue){
  const result = this.films.filter((film) => {
    return searchProperty === searchValue;
  });
  return result;
};

module.exports = Cinema;

