import React, { Component, useContext } from 'react';
import { navigate } from "gatsby";
import { ThemeContext } from 'providers/ThemeProvider';
import { RegisterButton, Input} from './styles';
import styled from 'styled-components';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class Join extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    const data = new FormData(event.target);
    fetch(
      "https://script.google.com/macros/s/AKfycby8po8CFRBc5wuglibqlfcS2jpiwWzLpxGvn6eeD6uh-jvHSg-4FsLXNcUuyTv-w9BQxA/exec",
      { method: "POST", body: data }
    )
      .then(response => console.log("success!", response))
      .catch(error => console.error("error!", error.message));
    event.preventDefault();
    navigate("/privacy");
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="email"
            placeholder="name@example.com"
            value={this.state.email}
            required
            onChange={event =>
              this.setState(
                updateByPropertyName("email", event.target.value)
              )
            }
          />
          <RegisterButton type="submit">submit</RegisterButton>
        </form>
    );
  }
}

export default Join;
