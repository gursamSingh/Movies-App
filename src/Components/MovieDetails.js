import React, { Component } from 'react';
import {movies} from './getMovies';
import {getMovieId} from './Movies';
import axios from 'axios'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
fontawesome.library.add(faStar,faArrowUpRightDots);



export default class MovieDetails extends Component {
    constructor(){
        super();
        this.state={
            movieBanner:[]
        }
    }

    async getMovieDetails(){
        let movieId = JSON.parse(localStorage.getItem("movie-id"));
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e999c3c2796b1d584bcdc857c9836d35&language=en-US`);
        let data = res.data;
        this.setState({
            movieBanner:[data]
        })
        console.log(data);
    }

    async componentDidMount(){
        this.getMovieDetails()
        
    }


  render() {
    let movie = movies.results[0];
    let genreids = {
        12: 'Adventure',
        28: 'Action',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'ScienceFiction',
        10770: 'TVMovie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    }

    return (
        <>
            <div>

            {

                this.state.movieBanner.length == 0? 
                <div className="d-flex justify-content-center" style={{padding:'1rem'}}>
                    <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                </div>:

                <div>
                    <div className='main header'style={{position:'relative',top:'1rem',height:'8rem'}}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6">
                                {
                                    this.state.movieBanner.map((movieObj) => (
                                        <>
                                        <div className='title'>{movieObj.original_title}</div>
                                        <div className='movie-release'>{movieObj.release_date}</div> 
                                        <div className='movie-runtime'>{movieObj.runtime} Minutes</div>
                                        </>
                                    ))
                                }
                            </div>
                            <div class="col movie-rating-col">

                                {
                                    this.state.movieBanner.map((movieObj)=>(
                                        <>
                                        
                                        <div className='movie-rating-container'>
                                            <div className='movie-rating'>
                                                <span className='movie-rating-title'>Rating</span>
                                            </div>
                                            <div className='movie-icon-container'>
                                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                                <span>{movieObj.vote_average}</span>
                                            </div>
                                        </div>

                                        <div className='movie-popularity-container'>
                                        <div className='movie-popularity'>
                                            <span className='movie-popularity-title'>Popularity</span>
                                        </div>
                                        <div className='movie-icon-container'>
                                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-dots" />
                                            <span>{movieObj.popularity}</span>
                                        </div>
                                        </div>      

                                        </>

                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                    </div>


                    {
                        this.state.movieBanner.map((movieObj)=>(

                            <div className='movie-content' style={{position:'relative',top:'2rem'}}>
                                <div className='movie-poster-container'>
                                    <img className='movie-poster' src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title}/>
                                </div>

                                <div className='movie-details-container'>
                                    <div className='movie-details-text'>
                                        <div className='movie-genre'>{movieObj.genres[0].name}</div>
                                        <div className='movie-genre'>{movieObj.genres[1].name}</div>
                                        <div className='movie-overview'>{movieObj.overview}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                
            }
            </div>            
        </>
    )
  }
}
