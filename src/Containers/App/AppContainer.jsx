import { connect } from 'react-redux';
import { fetchContacts } from '../../actions';
import App from './App';

const mapStateToProps = state => {
    return {
        photos: state.photos,
    }
}

const mapDispatchToProps = { fetchContacts };

export const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    )(App);