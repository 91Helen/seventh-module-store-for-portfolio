import { useState } from "react";
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function Home() {
  const [dress, setDress] = useState(data);

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setDress(newClothes);
  }

  return (
    <div>
      <div className='store-header'>
        <h1 className='store-title'>FEEL & WEAR</h1>
        <p className='store-subtitle'>Your Online Fashion Store</p>
      </div>

      <Buttons filteredClothes={chosenClothes}/>
      <Clothes anyClothes={dress}/>
    </div>
  );
}

export default Home;
