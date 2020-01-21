import React from 'react';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import ListFilms from '../components/ListFilms/ListFilmsContainer';
import SearchForm from '../components/SearchForm/SearchFormContainer';
import SortFilms from '../components/SortFilms/SortFilmsContainer';

const Home = () => {
  return (
    <div>
      <SearchForm />
      <SortFilms />
      <HeaderTitle title='Films' />
      <ListFilms />
    </div>
  );
};

export default Home;
