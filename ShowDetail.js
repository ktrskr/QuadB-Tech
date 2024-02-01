import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'styles.css';
const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => setShow(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      {/* Additional details and booking button can be added here */}
    </div>
  );
};

export default ShowDetail;
