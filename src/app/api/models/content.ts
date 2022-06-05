import { Observable } from "rxjs";

export interface ICollection<T = any> {
  data: T;
  data$: Observable<T>;
  init?(...params: any): void;
  destroy?(): void;
}

export interface IPerson {
  id: number;
  name: string;
  age: number;
  height: number;
  weight: number;
  gender: Gender;
  photo: string;
  status?: IStatus;
}

export interface IStatus {
  matched: boolean;
  liked: boolean;
  disliked: boolean;
}

export interface IPreferences {
  gender: Gender;
  age: number;
  height: number;
  weight: number;
  match_accuracy: number;
}

export enum ELocalStorage {
  preferences = 'preferences',
  uuid = 'uuid'
}

export type Gender = 'male' | 'female' | 'not_specified';
