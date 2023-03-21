import React, {Component} from 'react'
import {movies} from './getMovies'

export default class Favourites extends Component {
    constructor(){
        super();
        this.state={
            genres:[],
            currGenre:`All Genres`,
            movies:[]
        }
    }
    render() {
        let movie = movies.results;
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

        // adding genres to the genres array
        let tempArr = [];
        movie.forEach((movieObj)=>{
            if(!tempArr.includes(genreids[movieObj.genre_ids[0]])){
                tempArr.push(genreids[movieObj.genre_ids[0]]);
            }
        })

        tempArr.unshift("All Genres")

        console.log(tempArr);

        return (
            <div>
                <> <div className="main">
                    <div className="row">
                        <div className="col-3 favourites-genres">
                            <ul class="list-group">
                                {
                                    
                                    tempArr.map((genre)=>(
                                        this.state.currGenre == genre ? <li class="list-group-item movie-genre" style={{backgroundColor:'blue',color:'white',fontWeight:'bold'}}>{genre}</li> : <li class="list-group-item movie-genre" style={{backgroundColor:'white',color:'blue'}}>{genre}</li>
                                        
                                    ))
                                }
                                {/* <li class="list-group-item active movie-genre">Genre</li>
                                <li class="list-group-item movie-title">Dapibus ac facilisis in</li>
                                <li class="list-group-item">Morbi leo risus</li>
                                <li class="list-group-item">Porta ac consectetur ac</li>
                                <li class="list-group-item">Vestibulum at eros</li> */}
                            </ul>
                        </div>
                        <div className="col-9 favourites-table">
                            <div className='row input-search'>
                                <input placeholder='Search' type='text' className='input-group-text col'/>
                                <input  placeholder='Rating' type="number" className='input-group-number col'/>
                            </div>
                            <div className='row'>
                                <table className="table movies-table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Title</th>
                                            <th scope="col">Genre</th>
                                            <th scope="col">Popularity</th>
                                            <th scope="col">Rating</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movie.map((movieObj) => (

                                            <tr className='table-movie-row'>
                                                <td className='table-movie-title'>
                                                    <img className='table-movie-img' src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} style={{width:'10rem'}}/>
                                                
                                                <span>{movieObj.original_title}</span>
                                                </td>
                                                <td>{genreids[movieObj.genre_ids[0]]}</td>
                                                <td>{movieObj.popularity}</td>
                                                <td>{movieObj.vote_average}</td>
                                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                                            </tr>

                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='fav-pagination'>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>  
                        </ul>
                    </nav>
                </div>
            </>
        </div>
        )
    }
}
