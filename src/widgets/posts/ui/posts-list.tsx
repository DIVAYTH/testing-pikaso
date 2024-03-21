import {useEffect, useState} from "react";
import {useGetPostsQuery} from "../api/api-posts";
import {IPost} from "../types/posts";
import {Layout} from "../../layout/layout";
import {useInView} from "react-intersection-observer";
import {PostCard} from "../../../entities/post/post-card";
import {Loader} from "../../../shared/loader/loader";

export const PostsList = () => {
    const [currentPostStart, setPostStart] = useState(0)
    const {data, isFetching} = useGetPostsQuery({
        start: currentPostStart
    })

    const {ref: firstCard, inView: inViewFirstCard} = useInView({
        threshold: 0.1,
    });
    const {ref: lastCard, inView: inViewLastCard} = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inViewFirstCard) setPostStart((prev) => (prev === 0 ? prev : prev - 5));
        if (inViewLastCard) setPostStart((prev) => prev + 5);
    }, [inViewFirstCard, inViewLastCard]);

    const getIndexEl = (index: number, arr: IPost[]) => {
        if (index === 0) return firstCard
        if (index + 1 === arr.length) return lastCard
        return null
    }

    return (
        <Layout>
            {data?.map((el: IPost, index: number, arr: IPost[]) =>
                <div key={el.id} ref={getIndexEl(index, arr)}>
                    <PostCard {...el}/>
                </div>
            )}
            {isFetching &&
                <div style={{marginTop: 16}}>
                    <Loader height={160}/>
                </div>
            }
        </Layout>
    );
}
