import React, { useContext }  from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

const Smurf = ({ smurf }) => {
  const { removeSmurf, editSmurf } = useContext(SmurfsContext);
  return (
    <div>
      <h3>{smurf.name}</h3>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
      <button onClick={() => removeSmurf(smurf.id)}>delete</button>
      <button onClick={() => editSmurf(smurf)}>edit</button>
    </div>
  );
};

export default Smurf;