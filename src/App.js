import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import {PostCommentsPage, PostDetalisPage, PostsPage, UserDetalisPage, UserPostPage, UsersPage} from "./pages";


const App = () => {

    return (

        <Routes>
            <Route path={'/'} element={<Header/>}>
                <Route path={'/users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetalisPage/>}/>
                    <Route path={':id/post'} element={<UserPostPage/>}/>
                </Route>

                <Route path={'/posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetalisPage/>}/>
                    <Route path={':id/commets'} element={<PostCommentsPage/>}/>
                </Route>
            </Route>
        </Routes>

    );
};

export default App;