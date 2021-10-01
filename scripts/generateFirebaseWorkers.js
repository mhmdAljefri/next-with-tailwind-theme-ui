require('dotenv').config()
const fs = require('fs')

fs.writeFile(
  './public/firebase-messaging-sw.js',
  `
/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

firebase.initializeApp({
  apiKey: '${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}',
  projectId: '${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID_KEY}',
  messagingSenderId: '${process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID_KEY}',
  appId: '${process.env.NEXT_PUBLIC_FIREBASE_APP_ID_KEY}',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((message) => {
  // Customize notification here
  const notificationTitle = 'Wariq notification';
  const notificationOptions = {
    body: message.data['google.c.a.c_l'],
    icon: '/favicon-32x32.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);

  self.onnotificationclick= (event) => {
    
    
    event.notification.close();

    event.waitUntil(self.clients.matchAll({
      type: "window"
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == '/' && 'focus' in client)
          return client.focus();
      }
      if (self.clients.openWindow)
        return self.clients.openWindow('/notifications');
    }));
  }
});
`,
  (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log('File is created successfully.')
  }
)
