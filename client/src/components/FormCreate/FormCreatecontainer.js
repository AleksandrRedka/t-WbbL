import { connect } from 'react-redux';
import FormCreate from './FormCreate';
import * as FilmsActions from '../../redux/films/filmsActions';

const mapDispatchToProps = dispatch => ({
  createFilm: filmObject => dispatch(FilmsActions.create(filmObject)),
});

export default connect(null, mapDispatchToProps)(FormCreate);
