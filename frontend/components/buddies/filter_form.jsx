import React from 'react';

const handleChange = (filter, updateFilter) => {
  // debugger
  return (
    e => updateFilter(filter, e.currentTarget.value)
  );

}

const FilterForm = ({ sport, minRate, maxRate, zip, updateFilter }) => {
  const sports  = ["any", "swimming", "soccer", "basketball", "boxing", "running", "volleyball", "crossfit", "golf", "pingpong"]
  // debugger
  let sportsOptions = sports.map( (sportOption) => {
    if ((sport === sportOption)) {
      return (<option key={sportOption}  selected value={sportOption}>{sportOption}</option>);
    } else if (sport === sportOption) {
      return (<option key={sportOption}  selected value={sportOption}>{sportOption}</option>);
    } else {
      return (<option key={sportOption} value={sportOption}>{sportOption}</option>);
    }
  })
  return (
  <div className="filter-box">
      <div className="row">
        <h3>Sport</h3>
        <select className="" onChange={handleChange('sport', updateFilter)}>
          {sportsOptions}
        </select>
      </div>
      <div className="row">
        <h3>Min Rate</h3>
        <select className="" onChange={handleChange('minRate', updateFilter)}>
          <option value="zero">$0</option>
          <option value="10">$10</option>
          <option value="15">$15</option>
          <option value="20">$20</option>
          <option value="25">$25</option>
        </select>
      </div>
      <div className="row">
        <h3>Max Rate</h3>
        <select className="" onChange={handleChange('maxRate', updateFilter)}>
          <option value="10000000000">any</option>
          <option value="20">$20</option>
          <option value="30">$30</option>
          <option value="30">$30</option>
          <option value="50">$50</option>
        </select>
      </div>
      <div className="row">
        <h3>City</h3>
        <select className="" onChange={handleChange('zip', updateFilter)}>
          <option value="any">any</option>
          <option value="10001">NYC</option>
          <option value="94016">SF</option>
        </select>
      </div>
  </div>
)}

export default FilterForm;

// <option value="any">any</option>
// <option value="soccer">soccer</option>
// <option value="box">box</option>
// <option value="american football">american football</option>
// <option value="runnig">runnig</option>
// <option value="volleyball">volleyball</option>
// <option value="crossfit">crossfit</option>
// <option value="swimming">swimming</option>
// <option value="golf">golf</option>
// <option value="ping pong">ping pong</option>
