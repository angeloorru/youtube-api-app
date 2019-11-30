import React from 'react';
import SearchBar from "./SearchBar";
import Youtube, {baseURL} from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {

    state = {videos: [], selectedVideo: null};


    componentDidMount() {
        this.onSearchTermSubmit('ludwig drums');
    }

    onSearchTermSubmit = async (searchTerm) => {
        const response = await Youtube.get('/search', {
            params: {
                ...baseURL,
                q: searchTerm
            }
        });

        //console.log(response.data.items);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;