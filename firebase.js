// Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyDXW6S1Qy8CCjatFYeLwuPJR8wfBrDAkQY",
  authDomain: "refinement-cbef2.firebaseapp.com",
  projectId: "refinement-cbef2",
  storageBucket: "refinement-cbef2.firebasestorage.app",
  messagingSenderId: "1012442696041",
  appId: "1:1012442696041:web:4f0c0e38249badf9c455f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var db = firebase.firestore();

// Google Sign In
function signInWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
}

function signOut() {
  return auth.signOut();
}

function getCurrentUser() {
  return auth.currentUser;
}

// Save user data to Firestore
function saveUserData(uid, data) {
  return db.collection('users').doc(uid).set(data, { merge: true });
}

// Get user data from Firestore
function getUserData(uid) {
  return db.collection('users').doc(uid).get();
}

// Save habits to Firestore
function saveHabits(uid, habits) {
  return db.collection('users').doc(uid).set({ habits: habits }, { merge: true });
}

// Get habits from Firestore
function getHabits(uid) {
  return db.collection('users').doc(uid).get().then(function(doc) {
    if (doc.exists) {
      return doc.data().habits || [];
    }
    return [];
  });
}
