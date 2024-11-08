import type { SelectProps } from "antd";
import React, { useEffect } from "react";
import { getAllPosts, getAllUsers } from "../../service";
import Filter from "../filter/filter";
import Card from "../card/card";
import { useAppDispatch, useAppSelector } from "utils/hook/hook";
import { setPosts, setFilterPosts, setLoading, setUsers, setValue } from 'store/slicers/postSlicer'
import "./posts.scss";

const Posts: React.FC = () => {
  const data = useAppSelector((state) => state.posts)
  const dispatch = useAppDispatch();

  const { posts, users, loading, filterPosts } = data
  const Options: SelectProps["options"] = [];

  useEffect(() => {
    if ( posts.length || users.length ){  return }
    (async () => {
      try {
        dispatch(setLoading(true));
        const { data } = await getAllPosts();
        const user = await getAllUsers();

        dispatch(setUsers(user?.data));
        dispatch(setPosts(data));
        dispatch(setLoading(false));

      } catch (err: any) {
        dispatch(setLoading(false));
        console.log("error", err.message);
      }
    
    })();
  }, []);

  if (users?.length) {
    for (let i = 0; i < users?.length; i++) {
      Options.push({
        label: users?.[i]?.name,
        value: users?.[i]?.id,
      });
    }
  }

  const onChange = (value: any) => {
    const filterData = posts.filter((data: any) => data.userId === value);
    dispatch(setFilterPosts(filterData));
    dispatch(setValue(value));
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  if (loading) {
    return <>Loading...</>;
  }

  const allPosts = filterPosts?.length ? filterPosts : posts;
  return (
    <div className="posts">
      <div className="status__bar">
        <div className="title">Posts</div>
        <div className="post--filter">
          {Options?.length ? (
            <Filter
              placeholder="Select a user"
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
          allPosts.map((item: any, idx: number) => {
            return (
              <Card key={idx} title={item.title} body={item.body} />
            );
          })
        ) : (
          <>No Posts Found</>
        )}
      </div>
    </div>
  );
};

export default Posts;
