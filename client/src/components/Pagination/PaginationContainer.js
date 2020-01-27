import { connect } from 'react-redux';
import Pagination from './Pagination';
import * as PaginationActions from '../../redux/pagination/paginationActions';

import * as FilmsSelectors from '../../redux/films/filmsSelectors';

const mapStateToProps = state => ({
  filmsPerPage: FilmsSelectors.getFilmsPerPage(state),
  totalFilms: FilmsSelectors.getFilms(state).length,
  currentPage: FilmsSelectors.getCurrentPage(state),
});

const mapDispatchToProps = dispatch => ({
  changeCurrentPage: page => {
    // location.state({ ActivePage: page });
    return dispatch(PaginationActions.changePage(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
