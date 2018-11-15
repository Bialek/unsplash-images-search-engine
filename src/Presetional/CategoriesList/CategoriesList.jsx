import React from 'react';

class CategoriesList extends React.Component {

  onClickHandler = e => {
    this.props.changeCategoryAndFetch(e.target.value)
  }

  render() {
    return (
      <div>
        {this.props.categoriesList.map((category, k) =>  
          <button
            key={k}
            value={category}
            onClick={this.onClickHandler}
          > {category}
          </button>
        )}
      </div>  
    )
  }
}
export default CategoriesList