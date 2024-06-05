import { GridPostList } from "@/components/ui/shared/GridPostList";
import Loader from "@/components/ui/shared/Loader";
import {
  useGetPosts,
  useGetSavedPosts,
} from "@/lib/react-query/queriesAndMutations";
import React from "react";

const Saved = () => {
  const { data: posts, fetchNextPage, hasNextPage } = useGetPosts();
  const { data: po, fetch, hase } = useGetSavedPosts();
  console.log(po, "the output is");

  if (!posts) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
      </div>

      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold">Popular Today</h3>

        <div className="flex-center gap-3 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
          <img
            src="/assets/icons/filter.svg"
            width={20}
            height={20}
            alt="filter"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {posts.pages.map((item, index) => (
          <GridPostList key={`page-${index}`} posts={item.documents} />
        ))}
      </div>
    </div>
  );
};

export default Saved;
