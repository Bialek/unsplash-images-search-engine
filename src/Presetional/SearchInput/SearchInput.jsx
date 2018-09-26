import React from 'react';

class SearchInput extends React.Component {
    state = {
        value: ''
    }

    onChangeHandler = e => {
        this.setState({value: e.target.value});
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.changeCategoryAndFetch(this.state.value);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        type='text'
                        onChange={this.onChangeHandler}
                        value={this.props.category}
                    ></input>
                    <input
                        type='submit'
                    ></input>
                </form>
            </div>
        )
    }

}

export default SearchInput;