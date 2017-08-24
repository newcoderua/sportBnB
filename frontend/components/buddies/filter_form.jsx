import React from 'react';

const handleChange = (filter, updateFilter) => {
  return (
    e => updateFilter(filter, e.currentTarget.value)
  );

}

const FilterForm = ({ sport, minRate, maxRate, zip, updateFilter}) => (
  <div>
    <h3>Sport</h3>
      <div className="row">
        <select className="" onChange={handleChange('sport', updateFilter)}>
          <option value="">any</option>
          <option value="1">soccer</option>
          <option value="2">basketball</option>
        </select>
      </div>
  </div>
)

export default FilterForm;
