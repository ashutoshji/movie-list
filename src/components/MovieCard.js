import React from 'react';

const MovieCard =({title,overview,release_date,poster_path}) => {
  const path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`;
  var bgStyle = {
            backgroundImage: 'url(' + path + ')'
        }

				return(
				<div className="card">
					<div className="front" style={bgStyle} title={title}>
					</div>
						<div className="back">
						 <div className="title">
						<h3 >{title}</h3>
						</div>
						<p>{overview}</p>
						<div className="date">
							Published: {release_date}
						</div>
						</div>
					
				</div>)

}

export default MovieCard;

