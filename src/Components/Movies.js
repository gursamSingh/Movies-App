import React, { Component } from 'react'
import {movies} from './getMovies'

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:''
        }
    }
  render() {
    let movie = movies.results
    return (

        <>
        {
            movie.length==0?
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>:
            <div>
                <h2 className='text-center' style={{margin:'1rem'}}><strong>Trending</strong> </h2>

                <div className='movies-list'>
                    {
                        movie.map((movieObj) =>(
                        <div className="card movies-card" onMouseEnter={()=>{this.setState({hover:movieObj.id})}} onMouseLeave={()=>this.setState({hover:''})}>
                            <img className="card-img-top movie-img" src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movie.title}/>
                            <h3 className="card-title movie-title">{movieObj.title}</h3>
                                {/* <p className="card-text movie-text">{movieObj.overview}</p> */}
                                <div className='btn-wrapper'>

                                    {
                                        this.state.hover == movieObj.id &&
                                        <a className="btn btn-primary movie-btn">Add to Favourites</a>
                                    }
                                </div>
                        </div>
                        ))
                    }
                </div>
                <div className='page-nav' style={{display:'flex',justifyContent:'center',margin:'1rem'}}>
                    <nav aria-label="Page navigation example" style={{fontSize:'1.5rem'}}>
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>

        }
        
        </>
    )
  }
}
