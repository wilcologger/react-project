import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  // adawda
  const [dog, setDog] = useState(null);

  useEffect(() => {
    axios.get(url).then(Response => { setDog(Response.data) });
  }, [url]) // <- dependency array

  if (dog) {
    return (
      <div>
        <figure className='figure'>
          {/* eslint-disable-next-line */}
          <img className='figure-img img-fluid rounded' src={dog.message} />
          <figcaption class="figure-caption">{ dog.status }</figcaption>
        </figure>
      </div>
    )
  }

  return (
    <div></div>
  )
  
}

export default App;
