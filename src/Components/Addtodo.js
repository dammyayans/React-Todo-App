import React, { Component } from "react";

export default class Addtodo extends Component {
  render() {
    return (
      <div>
        <form
          action=""
          onSubmit={e => {
            this.props.handleSubmit(e);
          }}
        >
          <input
            className="input_field"
            type="text"
            name="title"
            id="title"
            value={this.props.value}
            placeholder="Enter a task"
            onChange={e => {
              this.props.handleChange(e);
            }}
          />
          <input className="input_submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
