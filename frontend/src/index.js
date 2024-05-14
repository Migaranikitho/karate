import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';

let metaElement = document.querySelector(`meta[name="google-signin-client_id"]`);

    if (!metaElement) {
      metaElement = document.createElement('meta');
      metaElement.setAttribute('name', 'google-signin-client_id');
      document.head.appendChild(metaElement);
    }

    metaElement.setAttribute('content', '783266013005-sgk9ngsqg751u5mfpl6umti083pmc4ib.apps.googleusercontent.com');
    
const script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js";
    document.head.appendChild(script);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    {/* <GoogleOAuthProvider clientId=".apps.googleusercontent.com"> */}
   
    <Login />
    {/* </GoogleOAuthProvider> */}
    </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
