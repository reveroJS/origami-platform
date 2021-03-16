import "./Main.css";
import Post from "./Post/";

const Main = ({posts}) => {

    return (
        <main className="main-conteiner">
            <h1>SooooooommmEeeee Heading</h1>
            <div className="stylePosts">
                {posts.map(x =>
                    <Post key={x.id}
                        content={x.content}
                        author={x.author}
                    />
                )}
            </div>

        </main>
    );

}

export default Main;