import { connect } from 'react-redux';
import SearchInput from '../../Presetional/SearchInput/SearchInput';
import { changeCategoryAndFetch } from '../../actions/index';


const mapDispatchToProps = { changeCategoryAndFetch }

export const SearchInputContainer = connect(
    null,
    mapDispatchToProps
)(SearchInput)