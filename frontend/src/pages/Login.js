import React from "react";
import App from '../App';

class Login extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            loginSuccess: false,
            user: null,
            profile: null,
        }
    }
     handleCredentialResponse(response) {
        console.log(response)
        // decodeJwtResponse() is a custom function defined by you
        // to decode the credential response.
        // const responsePayload = decodeJwtResponse(response.credential);
   
        // console.log("ID: " + responsePayload.sub);
        // console.log('Full Name: ' + responsePayload.name);
        // console.log('Given Name: ' + responsePayload.given_name);
        // console.log('Family Name: ' + responsePayload.family_name);
        // console.log("Image URL: " + responsePayload.picture);
        // console.log("Email: " + responsePayload.email);
     }
    onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    loadProfile(response) {
        console.log('componentDidUpdate');
        if (response) {

            fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
                headers: {
                    Authorization: `Bearer ${response.access_token}`,
                    Accept: 'application/json'
                }
            })
                .then((res) => {
                    console.log(res);
                    this.setState({ profile: res.data });
                })
                .catch((err) => console.log(err));
        }
    }
    render() {
        return <div class="g-signin2" data-onsuccess="onSignIn"></div>
        
//         return <div id="g_id_onload"
//         data-client_id="783266013005-sgk9ngsqg751u5mfpl6umti083pmc4ib"
//         data-callback="handleCredentialResponse">
//    </div>

        
    }
}


export default Login;