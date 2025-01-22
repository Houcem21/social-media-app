import { Models } from "appwrite";
import { useState } from "react";

type PostStatsPros = {
    post: Models.Document;
    userId: string;
}
const PostStats = ({post, userId}: PostStatsPros) => {

    const [liked, setLiked] = useState(false)
    console.log(userId, liked);

  return (
    <div className="flex justify-between items-center z-20">
        <div className="flex gap-2 mr-5">
            <img src="/assets/icons/like.svg" alt="like" 
            width={20} height={20} className="cursor-pointer"
            onClick={() => setLiked(true)} />
            <p className="small-medium lg: base-medium">{post.$createdAt}</p>
        </div>
    </div>
  )
}

export default PostStats