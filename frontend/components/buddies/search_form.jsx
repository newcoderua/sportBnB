import React from 'react';
import FilterForm from './filter_form';
import BuddiesForm from './buddies_form';

const SearchForm = ({buddies, sport, minRate, maxRate, zip, updateFilter }) => {

  return (
    <div className="contents-flex">
      <FilterForm
        sport={sport}
        minRate={minRate}
        maxRate={maxRate}
        zip={zip}
        updateFilter={updateFilter}
        />
    </div>
  );
}

export default SearchForm;
