import React from "react";

class SearchBar extends React.Component{
    state = { term: '' }

    //use arrow function so to fix unset state error
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search </label>
                        <input 
                            type="text" 
                            onChange={(e) => {this.setState({term: e.target.value})} } />
                    </div>
                </form>
            </div>
        )
    }

    //onInputChange(event){
    //    //const[ search ] = event.target
    //    console.log(event.target.value)
    //}
}

export default SearchBar;