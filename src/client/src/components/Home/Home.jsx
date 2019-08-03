import React from 'react';
import GoogleLogin from 'react-google-login';
import '../../styles/main.css';

import AuthService from '../../services/AuthService';

class Home extends React.Component {
    constructor() {
        super();
        this.Auth = new AuthService();

        this.logout = this.logout.bind(this);
    }

    logout = () => {
        this.Auth.logout();
    }

    successGoogle = (response) => {
        let authResponse = this.Auth
            .signIn(response.accessToken, response.profileObj);

        let profile = this.Auth.getProfile();

        console.log(profile);
    };
    render() {
        return (
            <div>
                <GoogleLogin
                    clientId=''
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.successGoogle}
                    scope='https://www.googleapis.com/auth/calendar.readonly 
                    https://www.googleapis.com/auth/calendar'
                />

                <div onClick={this.logout}>Log Out</div>

            </div>
        )
    };
};

export default Home; 
