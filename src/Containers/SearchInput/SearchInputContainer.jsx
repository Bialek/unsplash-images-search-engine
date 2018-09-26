import { connect } from 'react-redux';
import SearchInput from '../../Presetional/SearchInput/SearchInput';
import { changeCategoryAndFetch } from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        category: state.category
    }
}

const mapDispatchToProps = { changeCategoryAndFetch }

export const SearchInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput)