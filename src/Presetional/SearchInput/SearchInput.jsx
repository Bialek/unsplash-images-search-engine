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
        this.props.changeCategoryAndFetch((this.state.value).toLowerCase());
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        type='text'
                        onChange={this.onChangeHandler}
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