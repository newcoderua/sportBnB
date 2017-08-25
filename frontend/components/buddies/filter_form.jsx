import React from 'react';

const handleChange = (filter, updateFilter) => {
  return (
    e => updateFilter(filter, e.currentTarget.value)
  );

}

const FilterForm = ({ sport, minRate, maxRate, zip, updateFilter}) => (
  <div className="filter-box">
      <div className="row">
        <h3>Sport</h3>
        <select className="" onChange={handleChange('sport', updateFilter)}>
          <option value="any">any</option>
          <option value="soccer">soccer</option>
          <option value="box">box</option>
          <option value="american football">american football</option>
          <option value="runnig">runnig</option>
          <option value="volleyball">volleyball</option>
          <option value="crossfit">crossfit</option>
          <option value="swimming">swimming</option>
          <option value="golf">golf</option>
          <option value="ping pong">ping pong</option>
        </select>
      </div>
      <div className="row">
        <h3>Min Rate</h3>
        <select className="" onChange={handleChange('minRate', updateFilter)}>
          <option value="zero">$0</option>
          <option value="50">$50</option>
          <option value="100">$100</option>
          <option value="300">$300</option>
          <option value="500">$500</option>
          <option value="volleyball">volleyball</option>
        </select>
      </div>
      <div className="row">
        <h3>Max Rate</h3>
        <select className="" onChange={handleChange('maxRate', updateFilter)}>
          <option value="10000000000">any</option>
          <option value="100">$100</option>
          <option value="200">$200</option>
          <option value="400">$400</option>
          <option value="1000">$1000</option>
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
)

export default FilterForm;
