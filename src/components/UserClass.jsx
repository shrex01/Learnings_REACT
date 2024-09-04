import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            let updatedCount = this.state.count;
            updatedCount = updatedCount + 1;
            this.setState({
              count: updatedCount
            })
          }}>+ Count</button>
        <h2>Name : {name}</h2>
        <h3>Location: {location} </h3>
        <h3>Contact:{contact}</h3>
      </div>
    )
  }
}

export default UserClass 
