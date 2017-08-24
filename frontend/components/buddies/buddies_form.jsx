import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { BuddyIndexItem } from './buddy_index_item';
import { Redirect } from 'react-router-dom';
import SearchFormContainer from './search_form_container';

class BuddiesForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchBuddies();
  }

  render() {
    // debugger
    if (this.props.currentUser === null) {
      return (
        <Redirect to="/login" />
      )
    }

    return (
      <div  className="outer-buddies-index-main">
        <SearchFormContainer />

        <div className="buddies-index-main">
          <section className="buddies-index">
            <ul className="index-ul">
              {Object.keys(this.props.buddies).map( id => {
                return <BuddyIndexItem key={id} buddy={this.props.buddies[id]} />;
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default BuddiesForm;
