import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { SmurfsContext } from './contexts/SmurfsContext';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);
  const [smurfToEdit, setSmurfToEdit] = useState({});

  const addSmurf = (smurf) => {
    if (smurf.id) {
      axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then((res) => {
          setSmurfs(res.data);
        })
        .catch((err) => console.log('err', err));
    } else {
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then((res) => {
          setSmurfs(res.data);
        })
        .catch((err) => console.log('err', err));
    }
  };

  const removeSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((err) => console.log('err', err));
  };

  const editSmurf = (smurf) => {
    setSmurfToEdit(smurf);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((res) => {
        setSmurfs(res.data);
      })
      .catch((err) => console.log('err', err));
  }, []);

    return (
      <div className="App">
         <h1>Welcome to Smurfville</h1>
        <SmurfsContext.Provider
            value={{smurfs, smurfToEdit, addSmurf, removeSmurf, editSmurf}}
        >
            <Smurfs />
        <h3>Bring In New Villagers</h3>
            <SmurfForm />
        </SmurfsContext.Provider>
       </div>
    );
  }



const rootElement = document.getElementById('root');
ReactDOM.render(
<App />
, rootElement);
