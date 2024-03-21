import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {routes} from "../config/routes";
import {POSTS_PATH} from "../const";

export const Routing = () => {

    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Navigate to={POSTS_PATH}/>}/>
                {routes.map((el, i) => <Route key={i} path={el.path} element={el.element}/>)}
            </Routes>
        </Router>
    );
};
