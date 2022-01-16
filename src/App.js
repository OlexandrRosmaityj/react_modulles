import './App.css';
import Users from "./Componnents/Users/Users";
import Posts from "./Componnents/Posts/Posts";
import Comments from "./Componnents/Comments/Comments";


function App() {
  return (
      <div>
        <div className={'div'}>
          <Users/>
          <Posts/>
        </div>
        <Comments/>

      </div>
  );
}

export default App;