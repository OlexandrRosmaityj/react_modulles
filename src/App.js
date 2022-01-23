import {Navigate, Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {PhotosPage, PostCommentsPage, PostDetalisPage, PostPage, UserDetalisPage, UsersPage} from "./pages";
import {UserPostPage} from "./pages/UserPostPage/UserPostPage";
import AlbomsPage from "./pages/AlbomsPage/AlbomsPage";




const App = () => {

    return (

        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element ={<Navigate to = {'users'}/>}/>

                <Route path={'users'} element={<UsersPage/>}>

                    <Route path={':id'} element={<UserDetalisPage/>}>
                        <Route path={'posts'} element={<UserPostPage/>}/>
                    </Route>
                    <Route path={':id/albums'} element ={<AlbomsPage/>}>
                        <Route path={':albumId/photos'} element = {<PhotosPage/>}/>
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