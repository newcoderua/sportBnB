import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { BuddyIndexItem } from './buddy_index_item';
import { Redirect } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

class BuddiesForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    this.props.fetchBuddies(this.props.filters);
    // debugger
    // this.props.clearFilter();
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (this.props.filters !== nextProps.filters) {
      this.props.fetchBuddies(nextProps.filters)
    }
  }

  componentWillUnmount() {
    this.props.clearFilter();
  }

  render() {
    // debugger
    if (this.props.currentUser === null) {
      return (
        <Redirect to="/login" />
      )
    }
// debugger
    return (
      <div  className="outer-buddies-index-main">

        <div className="buddies-index-main">
          <section className="buddies-index">
            <ul className="index-ul">
              {Object.keys(this.props.buddies).reverse().map( id => {
                return <BuddyIndexItem
                      key={id}
                      buddy={this.props.buddies[id]}
                      filters={this.props.filters} />;
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default BuddiesForm;
