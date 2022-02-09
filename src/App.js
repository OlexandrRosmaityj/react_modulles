import React from 'react';

import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";
import {Layout} from "./components/Layout/Layout";
import {SinglePostPage} from "./pages/SinglePostPage/SinglePostPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import AuthProvider from "./hoc/AuthProvider";
import RequiereAuth from "./hoc/RequiereAuth";

const App = () => {
    return (
        <AuthProvider>
            <div>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={
                        <RequiereAuth>
                        <UsersPage/>
                    </RequiereAuth>}/>

                    <Route path={'posts'}  element={<PostsPage/>}>
                        <Route path={':id'}  element={<SinglePostPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>

                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    );
};

export default App;