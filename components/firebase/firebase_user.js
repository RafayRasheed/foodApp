import firestore from '@react-native-firebase/firestore';

export function createAccountFirebase(info) {
    console.log(info)
    return firestore().collection('usersT').doc(info.uid).set(info)
}