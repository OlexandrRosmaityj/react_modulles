import React from 'react';

import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {Layout} from "./components/Layout/Layout";
import {SinglePostPage} from "./pages/SinglePostPage/SinglePostPage";

const App = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>

                    <Route path={'posts'}  element={<PostsPage/>}>
                        <Route path={':id'}  element={<SinglePostPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default App;