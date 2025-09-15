import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { User } from '../types';

export class FirebaseService {
  static async signInWithPhoneNumber(phoneNumber: string) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      return confirmation;
    } catch (error) {
      console.error('Error sending SMS:', error);
      throw error;
    }
  }

  static async confirmCode(confirmation: any, code: string) {
    try {
      const userCredential = await confirmation.confirm(code);
      return userCredential;
    } catch (error) {
      console.error('Error confirming code:', error);
      throw error;
    }
  }

  static async createUserProfile(uid: string, data: Partial<User>) {
    try {
      await firestore().collection('users').doc(uid).set({
        ...data,
        createdAt: firestore.FieldValue.serverTimestamp(),
        lastActive: firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.error('Error creating user profile:', error);
      throw error;
    }
  }

  static async getUserProfile(uid: string): Promise<User | null> {
    try {
      const doc = await firestore().collection('users').doc(uid).get();
      if (doc.exists()) {
        const data = doc.data();
        return {
          uid,
          ...data,
          createdAt: data?.createdAt?.toDate(),
          lastActive: data?.lastActive?.toDate(),
        } as User;
      }
      return null;
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw error;
    }
  }

  static async updateLastActive(uid: string) {
    try {
      await firestore().collection('users').doc(uid).update({
        lastActive: firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.error('Error updating last active:', error);
    }
  }

  static getCurrentUser() {
    return auth().currentUser;
  }

  static onAuthStateChanged(callback: (user: any) => void) {
    return auth().onAuthStateChanged(callback);
  }

  static async signOut() {
    try {
      await auth().signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }
}
