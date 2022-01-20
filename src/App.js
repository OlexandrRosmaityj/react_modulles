
import './App.css';
import Rocets from "./componnents_/Rocets/Rocets";

function App() {
  return (
      <div className={'rocets'}>

<Rocets/>


    </div>
  );
}

export default App;


// есть API от SpaceX
//
// https://api.spacexdata.com/v3/launches/
//
//     нужно вывести все запуски кораблей кроме 2020 года
//
// информация нужна не вся, только: