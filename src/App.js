import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./Components/CardList/CardList";
import axios from "axios";
import Spinner from "./Components/Spinner/Spinner";

function App() {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, []);

  return (
    <div className="container">
      {Loading ? <Spinner /> : <CardList users={Users} />}
    </div>
  );
}

export default App;
