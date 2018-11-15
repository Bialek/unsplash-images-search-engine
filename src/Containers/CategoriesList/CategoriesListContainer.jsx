import { connect } from 'react-redux';
import categoriesList from '../../Presetional/CategoriesList/CategoriesList';
import { changeCategoryAndFetch } from '../../actions/index';

const mapStateToProps = state => { 
    return {
        categoriesList: state.categoriesList
    }
    
}

const mapDispatchToProps = { changeCategoryAndFetch }

export const CategoriesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(categoriesList)