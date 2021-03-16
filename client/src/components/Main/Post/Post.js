import "./Post.css";

const Post = ({ content, author }) => {
    return (
        <div className="post-conteiner">
            <img src="blue-origami-bird.png" alt="origami-bird" />
            <p className="post-description">
                {content}
            </p>
            <div>
                <span>
                    <small>Author:</small>  {author}
                </span>
            </div>
        </div>
    );
}

export default Post;