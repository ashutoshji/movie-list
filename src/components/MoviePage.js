import React from 'react';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import Movies from './Movies'
import {URL,MOVIENOTFOUND} from '../data/Const.js';

class MoviePage extends React.Component{

state = {
        moviesList: [],
        searchInput: 'Dark'
    };

    componentDidMount=()=>{
       this.getPopularMovie();
    }

    getPopularMovie = () => {
        fetch(`${URL}&query=${this.state.searchInput}`).then(res => res.json())
				.then(res => {
				    this.setState({
			            moviesList: res.results
			        });
					console.log('Success:', JSON.stringify(res)) 
				}).catch(error => console.error('Error:', error));
    }

     searchForMovie = event => {
            event.preventDefault();
            if(event){
               this.setState({
	            searchInput: event.target.value
		        });
	        if(event.length>2){
	        	  this.getPopularMovie();
	        	}
            }
    };


	render(){
	   const { moviesList ,searchInput} = this.state;
	   return(
        <div className="container">
		  <SearchBar
		    searchInput={searchInput}
		    handleChange={(event) => this.searchForMovie(event)}/>
        	{moviesList.length > 0 ? (
        	          <Movies movies={moviesList}/>
                ) : (
                    <p>
                        {MOVIENOTFOUND}
                    </p>
                )}
        </div>
	   )
	}
}

export default MoviePage;
