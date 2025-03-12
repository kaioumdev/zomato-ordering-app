import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kaioumdev")
        const json = await data.json()
        console.log(json)
    }
    render() {
        return <div className="user-card">
            {/* <button onClick={() => {
                //NEVER EVER UPDATE STATE VARIABLE DIRECTLY
                // this.state.count = this.state.count + 1
                this.setState({ count: this.state.count + 1 })
            }}>Count Increase</button> */}
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Bangladesh</h3>
            <h4>Email: kaioum@gmail.com</h4>
        </div>;
    }
}

export default UserClass;