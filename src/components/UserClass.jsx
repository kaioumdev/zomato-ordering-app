import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.state = {
            count: 0,
            count2: 0,
        }
    }
    render() {
        const { count } = this.state
        return <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                //NEVER EVER UPDATE STATE VARIABLE DIRECTLY
                // this.state.count = this.state.count + 1
                this.setState({ count: this.state.count + 1 })
            }}>Count Increase</button>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Bangladesh</h3>
            <h4>Email: kaioum@gmail.com</h4>
        </div>;
    }
}

export default UserClass;