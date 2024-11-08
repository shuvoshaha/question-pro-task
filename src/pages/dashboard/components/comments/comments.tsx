import React, { useEffect } from "react";
import {
  getAllComments,
  getAllPosts,
  getCommentsByPostId,
} from "../../service";
import Filter from "../filter/filter";
import Card from "../card/card";
import { useAppDispatch, useAppSelector } from "utils/hook/hook";
import {  setComments ,setPosts, setFilterPosts, setLoading, setValue } from 'store/slicers/commentSlicer'
import "./comments.scss";

const Comments: React.FC = () => {

  const data = useAppSelector((state) => state.comments)
  const dispatch = useAppDispatch();

  const { comments ,posts, loading, filterPosts } = data
  const Options: any[] = [];

  useEffect(() => {
    if ( posts.length ){  return }
    (async () => {
      try {
        dispatch(setLoading(true));
        const { data } = await getAllComments();
        const posts = await getAllPosts();

        dispatch(setComments(data));

        dispatch(setPosts(posts.data));
        dispatch(setLoading(false));
      } catch (err: any) {
        dispatch(setLoading(false));
        console.log("error", err.message);
      }
    })();
  }, []);

  if (posts?.length) {
    for (let i = 0; i < posts?.length; i++) {
      Options.push({
        label: posts?.[i]?.title,
        value: posts?.[i]?.id,
      });
    }
  }

  const onChange = async (value: string) => {
    if (!value) {
      return dispatch(setFilterPosts([]));
    }

    try {
      setLoading(true);
      const { data } = await getCommentsByPostId(value);

      dispatch(setFilterPosts(data));
      dispatch(setValue(value));

      dispatch(setLoading(false));
    } catch (err: any) {
      dispatch(setLoading(false));
      console.log("error", err.message);
    }
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  if (loading) {
    return <>Loading...</>;
  }

  const allPosts = filterPosts?.length ? filterPosts : comments;

  return (
    <div className="comments">
      <div className="status__bar">
        <div className="title">Comments</div>
        <div className="filter">
          {posts?.length ? (
            <Filter
              placeholder="Select a posts"
              onChange={onChange}
              onSearch={onSearch}
              data={Options}
              searchOption="label"
            />
          ) : null}
        </div>
      </div>
      <div className="all__posts">
        {allPosts?.length ? (
          allPosts.map((item: any, idx) => {
            return <Card key={idx} title={item.name} body={item.body} />;
          })
        ) : (
          <>No Posts Found</>
        )}
      </div>
    </div>
  );
};

export default Comments;
