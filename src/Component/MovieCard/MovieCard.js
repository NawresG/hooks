import React from 'react'
import "./MovieCard.css"
import Stars from "react-rating-stars-component"
export const MovieCard = ({el}) => {
  return (
    <div>
    <div>
  <div className="wrapper">
    <div className="main_card">
      <div className="card_left">
        <div className="card_datails">
          <h1>{el.title}</h1>
          <div className="card_cat">
            <p className="PG">PG </p>
            <p className="year">2018</p>
            <p className="genre">Action | Adventure </p>
            <p className="time">2h 28m</p>
          </div>
          <p className="disc">{el.description}</p>
          <div className="social-btn">
            {/* WATCH TRAILER*/}
            <button>
              <i className="fas fa-play" /> SEE TRAILER
            </button>
            {/* GET*/}
            <button>
<Stars Size={20} value={el.rating}  count={10} />
            </button>
            {/*USERS RATINGS*/}
      
            
          </div>	
        </div>
      </div>
      <div className="card_right">
        <div className="img_container">
          <img src={el.posterurl} alt="" />
        </div>
        <div className="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="blank">
            <i className="fas fa-play-circle" />
          </a>
        </div>
      </div>
    </div>
  </div>
 
</div>

    </div>
  )
}
