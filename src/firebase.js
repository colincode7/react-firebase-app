import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from './config';

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
