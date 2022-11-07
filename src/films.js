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
  const order = [];

  while (order.length <= 20) {
    let order = movies.map((obj) => {
      return `${obj.title}`;
    });

    return order.sort();
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const result = movies.map((obj) => {
    return [`Title: ${obj.title}, Year: ${obj.year}  `];
  });
  // result.length = 20;
  // return result.sort();
  //NO sé que falla aquí, porque en teoría era after order return 20 resultados.
  result.sort();
  result.length = 20;
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const result = movies.filter((m) => m.genre.includes(category));
  console.log(result);
  const average = result.reduce((a, b) => {
    return a + b.score;
  }, 0);
  console.log(average);
  console.log(`The average of this category is ${average}`);
  return average / result.length;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const result = movies.map((obj) => {
    //return [`The film ${obj.title} has a duration of ${(obj.duration.slice(3, -3)*1) + (obj.duration[0]*60) } minutes`]

    obj.duration = obj.duration.slice(3, -3) * 1 + obj.duration[0] * 60;
    console.log(obj);
    return obj;
    //return (obj.duration[0]*60) + dur;
  });
  console.log(result);

  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(year) {
  //Funciona en Run Js...pero no me pasa los tests
  const winner = [];
  const result = movies.filter((a) => a.year == year);
  //console.log(result)
  result.sort((a, b) => {
    if (a.score > b.score) {
      a = result[0];
      //console.log(a)
      winner.push(a);
      // console.log(result[0])
    }
  });
  return winner;
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
