import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBQ3sR9Nq5eA6yY3f3dde6lOgo2pASfWsE",
    authDomain: "quizz-app-f49dc.firebaseapp.com",
    projectId: "quizz-app-f49dc",
    storageBucket: "quizz-app-f49dc.appspot.com",
    messagingSenderId: "470455353488",
    appId: "1:470455353488:web:809377a811b25a67825815",
    measurementId: "G-KZKMNSZM48"

  };

firebase.initializeApp(config);
const messaging = firebase.messaging();

export function configNotification() {
    
  Notification.requestPermission().then((permission) => {
      messaging.getToken().then((currentToken) => {
        alert(currentToken);
        prompt('token', currentToken);
        console.log(currentToken)
        
        if (currentToken) {
        } else {
          // Show permission request.
          console.log('No registration token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

      });
  
  
  })

}