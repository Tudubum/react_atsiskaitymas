import { useContext } from "react";
import PostContext from "../contexts/PostContext";

const Post = () => {
    const { post } = useContext(PostContext);

    return (
        <div className="PostCards">
            {post.map((data) => (
                <div className="singleCard" key={data.id}>
                    <div className="postCardInfo">
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                    <div className="PostCardImg">
                        <img src={data.image} alt="img" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Post;