import React from 'react';
import Select from 'react-select';
import { formatTypes } from './formatTypes';

const SelectFormat = ({ onChange }) => {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      outline: 'none',
      borderRadius: 'none',
      borderBottom: '2px solid rgba(209, 81, 81, 0.425) ',
    }),
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      borderWidth: '2px',
      outline: 'none',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: 'rgba(209, 81, 81, 0.6)',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      color: 'rgba(209, 81, 81, 0.6)',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      lineHeight: '20px',
    }),
    menu: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      lineHeight: '20px',
    }),
  };
  return (
    <Select
      options={formatTypes}
      isSearchable={false}
      onChange={onChange}
      defaultValue={formatTypes[0]}
      styles={customStyles}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: 'rgb(206, 87, 87)',
          primary: 'rgba(209, 81, 81, 0.425)',
          curentColor: 'rgba(209, 81, 81, 0.6)',
        },
      })}
    />
  );
};

export default SelectFormat;
