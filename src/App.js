import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {PostPage, UsersPage} from "./pages";
import UserDetalisPage from "./pages/UserDetalisPage/UserDetalisPage";








const App = () => {
    return (

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetalisPage/>}/>
                </Route>
                    <Route path={'posts'} element={<PostPage/>}/>
                </Route>
            </Routes>

    );
};

export default App;