import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
import {getDatabase} from 'firebase/database';
// import {getAuth} from 'firebase/auth';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBwcvc1bVjbMndixkfLH1UYOmsmQAsGaiM',
  authDomain: 'my-docapp.firebaseapp.com',
  databaseURL:
    'https://my-docapp-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'my-docapp',
  storageBucket: 'my-docapp.appspot.com',
  messagingSenderId: '284203758046',
  appId: '1:284203758046:web:a0f3198b136d32d5c76d4f',
  measurementId: 'G-CV6361RW1Y',
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
//sebelumnya pakai gerAuth tapi gak bisa baca data yang login yang tersimpan
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
// const analytics = getAnalytics(app);
export const db = getDatabase(app);

/* untuk cek data login sebelumnya pakai fungsi auth ini namun tidak dapat
berjalan karena masalah asyncstorage */
// export const auth = getAuth(app);

const Fire = app;

export default Fire;
