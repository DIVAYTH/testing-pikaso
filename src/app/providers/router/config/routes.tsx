import {Posts} from "../../../../pages/posts/posts";
import {Post} from "../../../../pages/post/post";
import {POSTS_PATH} from "../const";

export const routes = [
    {
        path: POSTS_PATH,
        element: <Posts/>
    },
    {
        path: `${POSTS_PATH}/:id`,
        element: <Post/>
    }
]
