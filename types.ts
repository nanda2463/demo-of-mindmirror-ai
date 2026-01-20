export enum FocusState {
  FOCUSED = 'FOCUSED',
  TIRED = 'TIRED',
  OVERLOADED = 'OVERLOADED',
  IDLE = 'IDLE'
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface SessionData {
  timestamp: number;
  state: FocusState;
  duration: number; // in seconds
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface AdviceResponse {
  suggestion: string;
  color: string;
}

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
}