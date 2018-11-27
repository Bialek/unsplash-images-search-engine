import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search, SearchText, SearchBtn } from '../../StyledComponents/SearchInput';

class SearchInput extends React.Component {
    state = {
        value: '',
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
            <Search onSubmit={this.onSubmitHandler}>
                <SearchText
                    type='text'
                    placeholder='What do you want to find?'
                    onChange={this.onChangeHandler}
                ></SearchText>
                <SearchBtn type='submit'>
                    <FontAwesomeIcon icon='search' />
                </SearchBtn>
            </Search>
        )
    }

}

export default SearchInput;