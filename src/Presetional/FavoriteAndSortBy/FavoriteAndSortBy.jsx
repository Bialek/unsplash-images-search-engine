import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FavoriteAndSortByWrapper, FavoriteAndSortByBtn, FavoriteAndSortByLabel } from '../../StyledComponents/FavoriteAndSortBy';

class FavoriteAndSortBy extends React.Component {

  onClickHandler = () => {
    this.props.getFavorite()
  }

  onChangeHandler = e => {
    this.props.sortBy(e.target.value);
  }

  render() {
    return (
      <FavoriteAndSortByWrapper>
        <FavoriteAndSortByBtn onClick={this.onClickHandler}>
          <FontAwesomeIcon icon='heart' />
          Show favorite
        </FavoriteAndSortByBtn>

        <FavoriteAndSortByLabel>Sort By:</FavoriteAndSortByLabel>
        <select onChange={this.onChangeHandler}>
          <option value=""> </option>
          <option value="created_at">Created at</option>
          <option value="updated_at">Updated_at</option>
          <option value="likes">likes count</option>
				</select>
      </FavoriteAndSortByWrapper>
    )
  }
}

export default FavoriteAndSortBy