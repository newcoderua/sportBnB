import React from 'react';
import FilterForm from './filter_form';
import BuddiesFormContainer from './buddies_form_container';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    // debugger
    const sport = this.props.sport;
    this.state = { sport }
  }

  componentDidMount() {
    // debugger
    if (this.props.match.params.sport)  {
      // debugger

      this.setState({sport: this.props.match.params.sport})

      this.props.updateFilter('sport', this.props.match.params.sport)
    }
  }

  render() {
    // debugger
  return (
    <div className="contents-flex">
      <FilterForm
        sport={this.state.sport}
        minRate={this.props.minRate}
        maxRate={this.props.maxRate}
        zip={this.props.zip}
        updateFilter={this.props.updateFilter}
        />
      <BuddiesFormContainer />
    </div>
  );
  }
}

export default SearchForm;
