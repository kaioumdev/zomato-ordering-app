import React from 'react';
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy User",
                location: "default",
                avatar_url: "https://www.dummy.com"
            }
        }

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/kaioumdev")
        const json = await data.json()
        this.setState({ userInfo: json })
        console.log(json)
    }

    componentDidUpdate() {
        console.log("Component Updated")
    }

    componentWillUnmount() {
        console.log("Component Unmounted")
    }
    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return <div className="user-card">
            {/* <button onClick={() => {
                //NEVER EVER UPDATE STATE VARIABLE DIRECTLY
                // this.state.count = this.state.count + 1
                this.setState({ count: this.state.count + 1 })
            }}>Count Increase</button> */}
            <img src={avatar_url} alt="" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Email: kaioum@gmail.com</h4>
        </div>;
    }
}

export default UserClass;