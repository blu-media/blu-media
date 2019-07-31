import React from 'react';
import GoogleLogin from 'react-google-login';
import '../styles/main.css';

class Home extends React.Component {
    successGoogle = (response) => {
        const profileAndToken = JSON.stringify({
            accessToken: response.accessToken,
            profile: response.profileObj
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: profileAndToken,
            mode: 'cors',
            cache: 'default'
        };

        fetch('http://localhost:8080/auth/sign-in', options)
            .then(r => {
                console.log(r);
            })
    };

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId=''
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.successGoogle}
                    scope='https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar'
                />

            </div>
        )
    };
};

export default Home; 
