// import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// import { SERVER_URL } from "../App";
import "../App.css";

export function DisplayLists({show}) {
    let navigate = useNavigate();
    
    const displayContent = () => {
        console.log("Inside Display Content",show.id)
        navigate("/showDetails/"+show.id)
        window.location.reload()
    }
    return (
        <div className="col-3 showCard">
            <div className="card">
                <img className="card-img-top" src={show.image?.original} alt="Img" />
                <div className="card-body">
                    <h5 className="card-title">Name : {show.name}</h5>
                    <h6 className="card-subtitle rating">Rating : {show.rating.average}</h6>
                    <div className="buttonAlign">
                        <Button type="submit"
                            className="add-to-cart-btn" onClick={() => displayContent(show.id)}
                        >
                            View
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}