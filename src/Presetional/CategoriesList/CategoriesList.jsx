import React from 'react';
import { CategoriesWrapper, CategoriesBtn } from '../../StyledComponents/CategoriesList';

class CategoriesList extends React.Component {

  onClickHandler = e => {
    this.props.changeCategoryAndFetch(e.target.value)
  }

  render() {
    return (
      <CategoriesWrapper>
        {this.props.categoriesList.map((category, k) =>  
          <CategoriesBtn
            key={k}
            value={category}
            onClick={this.onClickHandler}
          > {category}
          </CategoriesBtn>
        )}
      </CategoriesWrapper>  
    )
  }
}
export default CategoriesList