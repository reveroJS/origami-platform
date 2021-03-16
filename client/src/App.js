
import { Component } from "react";

import postServices from "./services/postService";

import style from "./App.module.css";
import Header from "./components/Header/";
import Menu from "./components/Menu";
import Main from "./components/Main";

// function App() {
//     return (
//         <div className={style.app}>
//             <Header />
//             <div className={style.container}>
//                 <Menu />
//                 <Main />
//             </div>

//         </div>

//     );
// }


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postServices.getAll()
            .then(posts => {
               
                this.setState({ posts })
            })
    }

     
    render() {

        return (
            <div className={style.app}>
                <Header />
                <div className={style.container}>
                    <Menu />
                    <Main posts={this.state.posts} />
                </div>

            </div>
        );
    }
}

export default App;