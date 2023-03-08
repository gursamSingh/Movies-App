import React, { Component } from 'react'
import axios from 'axios'

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            parr:[1],
            currPage:1,
            movies:[]
        }
    }

    async componentDidMount(){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e999c3c2796b1d584bcdc857c9836d35&language=en-US&page=${this.state.currPage}`);
        let data = res.data
        // console.log(data)
        this.setState({
            movies:[...data.results]
        })
    }

    changeMovies = async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e999c3c2796b1d584bcdc857c9836d35&language=en-US&page=${this.state.currPage}`);
        let data = res.data
        this.setState({
            movies:[...data.results]
        })
    }

    handleRight = () =>{
        let tempArr = [];
        for(let i = 1; i <=this.state.parr.length+1; i++){
            tempArr.push(i)
        }

        this.setState ({
            parr:[...tempArr],
            currPage:this.state.currPage+1
            
        },this.changeMovies)
    }

    handleLeft = ()=>{
        if(this.state.currPage != 1){
            this.setState({
                currPage:this.state.currPage - 1
            },this.changeMovies)
        }
    }

    handleClick =(value)=>{
        if(value != this.state.currPage){
            this.setState({
                currPage:value
            },this.changeMovies)
        }
    }

  render() {
    // let movie = movies.results
    return (

        <>
        {
            this.state.movies.length==0?
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>:
            <div>
                <h2 className='text-center' style={{margin:'1rem'}}><strong>Trending</strong> </h2>

                <div className='movies-list'>
                    {
                        this.state.movies.map((movieObj) =>(
                        <div className="card movies-card" onMouseEnter={()=>{this.setState({hover:movieObj.id})}} onMouseLeave={()=>this.setState({hover:''})}>
                            <img className="card-img-top movie-img" src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={this.state.movies.title}/>
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
                        <a class="page-link" aria-label="Previous" onClick={this.handleLeft}>
                            <span class="sr-only">Next</span>
                            <li class="page-item">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                            </li>
                        </a>
                        {
                            this.state.parr.map((value)=> (
                                <li class="page-item"><a class="page-link" onClick={()=> this.handleClick(value)}>{value}</a></li>

                            ))
                        }
                        <li class="page-item">
                        <a class="page-link" aria-label="Next" onClick={this.handleRight}>
                            <span aria-hidden="true">&raquo;</span>

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
