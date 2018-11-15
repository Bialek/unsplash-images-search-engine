import React from 'react';
import './FavoriteAndSortBy.css'

class FavoriteAndSortBy extends React.Component {

  onClickHandler = () => {

  }

  onChangeHandler = e => {
    this.props.sortBy(e.target.value);
  }

  render() {
    return (
      <div className="FavoriteAndSortBy">
        <button
          onClick={this.onClickHandler}
        >Favorite
        </button>

        <p>Sort By:</p>
        <select onChange={this.onChangeHandler}>
          <option value=""> </option>
          <option value="created_at">Created at</option>
          <option value="downloads">Downloads count</option>
          <option value="likes">likes count</option>
				</select>
      </div>
    )
  }
}

export default FavoriteAndSortBy