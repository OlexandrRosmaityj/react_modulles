import Users from "./components/Users/Users";
import UsersDetalis from "./components/UsersDetalis/UsersDetalis";
import Posts from "./components/Posts/Posts";
import style from './App.module.css'

function App() {
  return (
    <div>
      <div className={style.wrap}>

        <Users/>

        <UsersDetalis/>

      </div>

      <Posts/>

    </div>
  );
}

export default App;
