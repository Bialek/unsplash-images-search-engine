import { connect } from 'react-redux';
import categoriesList from '../../Presetional/CategoriesList/CategoriesList';

const mapStateToProps = state => { 
    return {
        categoriesList: state.categoriesList
    }
    
}

export const CategoriesListContainer = connect(
    mapStateToProps
)(categoriesList)