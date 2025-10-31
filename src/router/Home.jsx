import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Movie from '../components/Movie';

const Home = () => {
  const [state, setState] = useState({
    isLoading : true,
    movies : []
  });
  
  const getMovies = async () => {
    const {
      data : {
        data : {
          movies
        }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    setState({ movies, isLoading : false }); // movies : movies :: key, value 가 같으면 축약가능
  }
  useEffect(() => {
    getMovies();
  }, [])

  const { isLoading, movies } = state;
  return (
    <section className='container inner'>
      <h1>YTS Movie App</h1>
      {
        isLoading // true, false 반대로 쓰는게 보편적
        ? (
          <div className="loader">
            <p className="loader_text">loading..</p>
            <p>loading...</p>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map(movie => {
                return <Movie 
                  key={movie.id}
                  id={movie.id} 
                  year={movie.year} 
                  title={movie.title} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  genres={movie.genres} 
                /> /* 넘길 때 필요한 내용만 넘길 수 있음 */
              })
            }
          </div>
        )
      }
    </section>
  )
  
}

export default Home;
