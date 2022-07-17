import { useEffect, useState} from "react";
// import { Link, Route, Switch, useHistory } from "react-router-dom";
// import Button from "@mui/material/Button";
// import TextField from '@mui/material/TextField';
import { SERVER_URL } from "../App";
import { DisplayLists } from "./DisplayLists";

export function Landing() {
    const [showList, setShowList] = useState([]);
    useEffect(() => {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        console.log(userDetails)
        const body = { email : userDetails.userId };

        fetch(`${SERVER_URL}show/getShows`
          ,{
              method : 'POST',
              headers : { 'Content-Type': 'application/json' },
              body : JSON.stringify(body)
          })
          .then((data) => data.json())
          .then((result) => {
            console.log(result);
            setShowList(result);
          });     
    }, []);

    return (
      <div className="container displayContainer">
        {showList.map((show, index) => 
          <DisplayLists key={index} show={show} />
        )}
      </div>
    );
  }