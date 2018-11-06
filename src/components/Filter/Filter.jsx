// @flow
import React from 'react';
import './_c-filter.scss';

type Props = {
  handleChange: Function,
  filter: string
};

export const Filter = ({ handleChange, filter }: Props) => (
  <label className="c-filter" htmlFor="filter">
    <span className="sr-only">Search:</span>
    <input
      className="c-filter__input"
      type="search"
      id="filter"
      placeholder="Search..."
      onChange={handleChange}
      value={filter}
    />
  </label>
);
