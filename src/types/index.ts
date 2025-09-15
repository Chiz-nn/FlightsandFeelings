export interface User {
  uid: string;
  phoneNumber: string;
  displayName?: string;
  photoURL?: string;
  isProfileComplete: boolean;
  createdAt: Date;
  lastActive: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface PhoneAuthState {
  phoneNumber: string;
  verificationId: string | null;
  code: string;
  isLoading: boolean;
  error: string | null;
}

export interface Profile {
  name: string;
  age: number;
  bio: string;
  photoURL?: string;
  gender: 'male' | 'female' | 'other';
  lookingFor: 'male' | 'female' | 'both';
}
