import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {PostCommentsPage, PostDetalisPage, PostPage, UserDetalisPage, UsersPage} from "./pages";
import {UserPostPage} from "./pages/UserPostPage/UserPostPage";


const App = () => {

    return (

        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element ={<Navigate to = {'user'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetalisPage/>}>
                        <Route path={'posts'} element={<UserPostPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<PostDetalisPage/>}>
                        <Route path={'comments'} element={<PostCommentsPage/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>

    );
};

export default App;