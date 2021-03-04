import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";

class App extends  React.Component{
    state = { images: [] }

    onSearchSubmit = async (term) =>  {
        const response = await unsplash.get("/search/photos", {
            params: { query: term } 
           });
        //.then(response => {
        //    console.log(response.data.results[0]);
        //})

        console.log(response.data.results)
        this.setState({images: response.data.results});
    }
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        )
    }
}

export default App;