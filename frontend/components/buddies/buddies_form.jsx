import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import BuddyIndexItem from './buddy_index_item';

class BuddiesForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBuddies();
  }

  render() {
    // debugger
    if (this.props.currentUser === null) {
      return (
        <SessionFormContainer />
      )
    }
    // debugger
    return (
      <div className="buddies-index-main">
        <section className="buddies-index">
          <ul className="index-ul">
            {Object.keys(this.props.buddies).map( buddy => (
              <BuddyIndexItem key={buddy.id} buddy={buddy} />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default BuddiesForm;
