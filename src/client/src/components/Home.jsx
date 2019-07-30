import React from 'react';
import GoogleLogin from 'react-google-login';
import '../styles/main.css';

class Home extends React.Component {
    successGoogle = (response) => {
        const tokenBlob = new Blob([JSON.stringify({ access_token: response.accessToken }, null, 2)],
            { type: 'application/json' });
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:8080/api/v1/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    console.log(user);
                }
            });
        })
    };

    render() {
        let clientId = process.env;
        console.log(clientId);

        return (
            <div>
                <GoogleLogin
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.successGoogle}
                    scope='https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar'
                />

            </div>
        )
    };
};

export default Home; 
