import { connect } from 'react-redux';
import { fetchphotos } from '../../actions';
import App from './App';

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching
    }
}

const mapDispatchToProps = { fetchphotos };

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    )(App);