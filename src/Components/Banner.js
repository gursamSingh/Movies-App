import React, { Component } from 'react'
import axios from "axios";


export default class Banner extends Component {
  constructor(){
    super();
    this.state={
      movies:[]
    }
  }

  async getMovieBanner(){
    const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=e999c3c2796b1d584bcdc857c9836d35&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    let data = res.data;
    let movieBanner = data.results[0];
    this.setState({
      movies:[movieBanner]
    })

    // console.log(movieBanner);
  }

  componentDidMount(){
    this.getMovieBanner()
  }


  render() {
    return (
        <>
        {
            // here we have used if the movies object is empty show a loading component else show the movie cars (done using terniary operator)
            this.state.movies.length == 0? 
            <div className="d-flex justify-content-center" style={{padding:'1rem'}}>
                <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
                </div>
            </div>:         

            <div className="card banner-card">
              {
                this.state.movies.map((movieObj)=>(
                  <img className="card-img-top banner-img" src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title}/>
                ))
              }
                
              {
                this.state.movies.map((movieObj)=>(

                  <div className="banner-content">
                    <h1 className="card-title banner-title">{movieObj.title}</h1>
                    <p className="card-text banner-text">{movieObj.overview}</p>
                  </div>
                ))
              }


            </div>
        }
        </>
    )
  }
}
