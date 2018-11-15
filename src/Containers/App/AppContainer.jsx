import { connect } from 'react-redux';
import { fetchContacts } from '../../actions';
import App from './App';

const mapDispatchToProps = { fetchContacts };

export const AppContainer = connect(
    null,
    mapDispatchToProps,
    )(App);