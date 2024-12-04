import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
        };
    }

    async componentDidMount() {
        const data = await fetch(
            "https://api.github.com/users/shalini-kataram"
        );
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }

    render() {
        const { login, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user">
                <img src={avatar_url} />
                <h2>Name:{login}</h2>
                <h4>Location:{location}</h4>
                <h4>Contact:@shalinipolapally</h4>
            </div>
        );
    }
}

export default UserClass;
