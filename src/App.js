import './App.css';
import Users from "./Componnents/Users/Users";
import Posts from "./Componnents/Posts/Posts";
import Comments from "./Componnents/Comments/Comments";


function App() {
  return (
      <div>
        <div className={'div'}>
            <div className={'div_user'}><Users/></div>
            <div className={'div_posts'}><Posts/></div>
        </div>
          <div className={'div_comments'}><Comments/></div>

      </div>
  );
}

export default App;