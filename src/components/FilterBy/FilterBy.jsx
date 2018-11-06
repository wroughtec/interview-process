// @flow
import React from 'react';
import { nameFilter, cityFilter } from 'consts/filters';
import './_c-filter-by.scss';

type Props = {
  handleChange: Function,
  filterBy: string
};

export const FilterBy = ({ handleChange, filterBy }: Props) => (
  <select className="c-filter-by" value={filterBy} onChange={handleChange}>
    <option value={nameFilter}>Name</option>
    <option value={cityFilter}>City</option>
  </select>
);
