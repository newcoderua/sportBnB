import React from 'react';
import FilterForm from './filter_form';
import BuddiesFormContainer from './buddies_form_container';

const SearchForm = ({buddies, sport, minRate, maxRate, zip, updateFilter }) => {
  // debugger
  return (
    <div className="contents-flex">
      <FilterForm
        sport={sport}
        minRate={minRate}
        maxRate={maxRate}
        zip={zip}
        updateFilter={updateFilter}
        />
      <BuddiesFormContainer />
    </div>
  );
}

export default SearchForm;
