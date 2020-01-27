import React from 'react';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import ListFilms from '../components/ListFilms/ListFilmsContainer';
import SearchForm from '../components/SearchForm/SearchFormContainer';
import SortFilms from '../components/SortFilms/SortFilmsContainer';
import Pagination from '../components/Pagination/PaginationContainer';

const Home = () => {
  return (
    <div>
      <SearchForm />
      <SortFilms />
      <HeaderTitle title='Films' />
      <ListFilms />
      <Pagination />
    </div>
  );
};

export default Home;
