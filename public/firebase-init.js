// Firebase initializer (browser, modern modular SDK via CDN)
// Usage: import { initFirebase } from './firebase-init.js';
// Then call initFirebase(yourFirebaseConfigObject)

export function initFirebase(firebaseConfig) {
  if (!firebaseConfig) {
    return Promise.reject(new Error('firebaseConfig is required'));
  }

  return import('https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js')
    .then(({ initializeApp }) => {
      try {
        const app = initializeApp(firebaseConfig);
        console.info('Firebase initialized');
        return app;
      } catch (e) {
        console.warn('Firebase initialization error', e);
        throw e;
      }
    })
    .catch((err) => {
      console.warn('Failed to load Firebase SDK', err);
      throw err;
    });
}
