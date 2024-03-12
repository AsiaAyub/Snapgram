import PostForm from "@/components/forms/PostForm";
import Loader from "@/components/ui/shared/Loader";
import { appwriteConfig, databases } from "@/lib/appwrite/config";
import { QUERY_KEYS } from "@/lib/react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Models } from "appwrite";
import { resolve } from "path";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";

const EditPost = () => {
  const { id } = useParams();

  const { data: post, isPending } = useGetPostById(id || "");

  // const prse = databases.getDocument(
  //   "65e82a02a83687b18577",
  //   "65e82a8a0cf6175f2d90",
  //   "65eebf294c4e2c822631"
  // );

  // prse.then(
  //   function (response) {
  //     // Iterate over object properties and log key-value pairs
  //     //for (const key in response) {
  //     if (response.hasOwnProperty("caption")) {
  //       const value = response["caption"];
  //       console.log(`${"caption"}: ${value}`);
  //     }

  //     if (response.hasOwnProperty("imageUrl")) {
  //       const value = response["imageUrl"];
  //       console.log(`${"imageUrl"}: ${value}`);

  //       if (response.hasOwnProperty("location")) {
  //         const value = response["location"];
  //       }

  //       if (response.hasOwnProperty("tags")) {
  //         const value = response["tags"];
  //       }
  //     }

  // }
  //     console.log(typeof response); // Success
  //   },
  //   function (error) {
  //     console.log(error); // Failure
  //   }
  // );

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="flex-start gap-3 justify-start w-full max-w-5xl">
          <img
            src="/assets/icons/edit.svg"
            width={36}
            height={36}
            alt="edit"
            className="invert-white"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>

        <PostForm action="Update" post={post} />
      </div>
    </div>
  );
};

export default EditPost;
