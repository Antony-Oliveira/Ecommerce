// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlUp_UzLcGYTuZrPRE8j_oXKra9v4P3VE",
    authDomain: "ecommerce-8d274.firebaseapp.com",
    projectId: "ecommerce-8d274",
    storageBucket: "ecommerce-8d274.appspot.com",
    messagingSenderId: "15024407402",
    appId: "1:15024407402:web:2cf56da5fdc247fe5e9b13",
    measurementId: "G-YQCZHBYS05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function  getImageUrl(imageName) {
    const imageRef = ref(storage, imageName);
    // console.log(getDownloadURL(imageRef));
    return getDownloadURL(imageRef);
}
