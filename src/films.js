// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  const result = movies.map((directors) => directors.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const result = movies.filter((m) => m.director.includes(director));
  console.log('Exercise 2', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const result = movies.filter((m) => m.director.includes(director));
  console.log(result.length);
  const average = result.reduce((a, b) => {
    return a + b.score;
  }, 0);
  console.log(average);
  console.log(`The average of this director is ${average}`);
  return average / result.length;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const order = movies.map((obj) => {
    return obj.title;
  });
  order.sort();
  //console.log(order.sort());
  if (order.length > 20) {
    order.length = 20;
  }
  console.log(order);
  return order;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const order = movies.sort(function (a, b) {
    return a.year - b.year;
  });
  order.sort(function (a, b) {
    if (a.title === b.title) {
      return a.year - b.year;
    }
  });
  console.log(order);
  return order;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let result = movies.filter((m) => m.genre.includes(category));
  console.log(result);
  let average = result.reduce((a, b) => {
    return a + b.score;
  }, 0);
  average = average / result.length;
  //console.log(average);
  //console.log(`The average of this category is ${average}`);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const result = movies.map((obj) => {
    obj.duration = obj.duration.slice(3, -3) * 1 + obj.duration[0] * 60;
    return obj;
  });
  console.log(result);

  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let winner = [];

  let result = movies.filter((a) => a.year == year);

  //console.log(result)
  result.sort((a, b) => {
    return a.average - b.average;

    // console.log(result[0])
  });
  //console.log(result)

  winner = result[0];
  return [winner];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
