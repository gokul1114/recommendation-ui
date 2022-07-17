import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../App";
import { useParams } from "react-router-dom";
import { DisplayLists } from "./DisplayLists";

export function ShowDetails() {
    const { id } = useParams();
    const [showId , setShowId] = useState(id)
    const [showDetails, setShowDetails] = useState()
    const [recommendedMovieList, setRecommendedMovieList] = useState([])

    useEffect(() => {

    })

    useEffect(() => {
        const body = {showId};
        console.log(`${SERVER_URL}show/getDetails`)
        fetch(`${SERVER_URL}show/getDetails`
          ,{
              method : 'POST',
              headers : { 'Content-Type': 'application/json' },
              body : JSON.stringify(body)
          })
          .then((data) => data.json())
          .then((result) => {
            console.log(result);
            setShowDetails(result);
          });
    },[showId])

    useEffect(() => { 
        getRecommendedShows(showDetails?.genres)
    },[showDetails])

    function getRecommendedShows(genres) {
        let body = {genres}
        console.log(genres)
        fetch(`${SERVER_URL}show/getRecommendedShows`
          ,{
              method : 'POST',
              headers : { 'Content-Type': 'application/json' },
              body : JSON.stringify(body)
          })
          .then((data) => data.json())
          .then((result) => {
            console.log(result);
            setRecommendedMovieList(result);
          });
    }

    return (
        <div>
            {showDetails ? 
            <div className="card">
                <img className="card-img-top" src={showDetails.image?.original} alt="Img" />
                <div className="card-body">
                    <h5 className="card-title">Name : {showDetails.name}</h5>
                    <h6 className="card-subtitle rating">Rating : {showDetails.rating.average}</h6>
                    <p className="card-text">{showDetails.summary}</p>
                </div>
            </div>
            : 
            <div></div>
            }
            <div className="recommendationContainer">
            {recommendedMovieList ?
                recommendedMovieList.map((show, index) => (
                    <DisplayLists key={index} show={show} />
                  ))
                :
                <div></div>
            }
            </div>
        </div>
    )
}