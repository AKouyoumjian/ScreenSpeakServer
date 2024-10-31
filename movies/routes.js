function MovieRoutes(app){

  app.get('/api/upcoming', async (req, res) => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjA3MTcxNWViMDc5ZGNiOGUyNjVkMTk4MTg4NjNhYyIsInN1YiI6IjY1NWYyYTgzN2RmZGE2MDEzOGY5MGUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HKY7Hf1XSS6VdDa1wgIiCKb_MOq2LFA71sCv6aZ9Mm4",
        },
      };
      const upcomingMoviesResponse = await axios.get(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        options
      );
      const upcomingMovies = upcomingMoviesResponse.data.results;
    res.json({upcomingMovies});
  } catch (err) {

    res.status(500)
  }
  });
}

export default MovieRoutes;