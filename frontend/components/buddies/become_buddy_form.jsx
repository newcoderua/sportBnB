import React from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';


class BecomeBuddyForm extends React.Component {
  constructor(props) {
    super(props);
// debugger
    this.state = {
      name: this.props.currentUser.username,
      sport: "",
      rate: 0,
      zip: 0,
      best_achievement: "",
      image_url: "",
      // imageFile: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // do not not forget to change buddy boolean to true on submit
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBuddy(merge({}, this.state)).then(() => this.props.history.push("/buddies"));
     // I need set buddy_id to future buddy.id
     //also set buddy(boolean) to false like a default value
     // maybe add some
    // success cb, like buddy_id or something
  }

  // updateFile(e) { // I need upload image for user here
  //   var file = e.currentTarget.files[0];
  //   this.setState({ imageFile: file }, () => {
  //     var formData = new FormData();
  //     formData.append("buddy[avatar]", this.state.imageFile);
  //     formData.append("id", this.props.currentUser.id);
  //     this.props.updateUser(formData);
  //   });
  // }

  update(property) {
    return e => {
      return this.setState({ [property]: e.target.value })
    }
  }

  render() {
    return(
      <div className='become-buddy-main-form'>
        <div className="content-become-buddy">
          <div className="three-meaningless-words">
            <span>Work.Life.Balanced.</span>
          </div>
          <div className="become-buddy-form">
            <form className="actual-form-become-buddy" onSubmit={this.handleSubmit} >
              <h1>Become a buddy</h1>
              Extend your account to get started<br />
            <div className="only-sport-modal-content">
            <select className="sport-modal-content" name="sport" onChange={this.update('sport')}>
                <option id="field-for-become-buddy">select sport</option>
                <option value="soccer">soccer</option>
                <option value="basketball">basketball</option>
                <option value="volleyball">volleyball</option>
                <option value="box">box</option>
                <option value="running">running</option>
                <option value="crossfit">crossfit</option>
                <option value="swimming">swimming</option>
                <option value="golf">golf</option>
            </select>
          </div>

          <div>

            <textarea
              id="field-for-become-buddy"
              onChange={this.update('zip')}
              placeholder="Zip" />
          </div>

          <div>

            <textarea
              id="field-for-become-buddy"
              onChange={this.update('rate')}
              placeholder="Rate per hour"/>
          </div>

          <div>

            <textarea
              id="field-for-become-buddy"
              onChange={this.update('best_achievement')}
              placeholder="Best achievement details or motto" />
          </div>

          <div>

              <textarea
                id="field-for-become-buddy"
                onChange={this.update('image_url')}
                placeholder="Url to your profile image" />

          </div>

          <button className="yahoo button" type="submit">Create Buddy</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default BecomeBuddyForm;
//<img src={this.props.currentUser.image_url} id="profile-pic"/>
// <input type="file" onChange={this.updateFile.bind(this)} />
