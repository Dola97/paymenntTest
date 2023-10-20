import {TransactionRecord} from '../types/transaction';
import type {StackScreenProps} from '@react-navigation/stack';

export type AuthParamsList = {
  Login: undefined;
  SignUp: undefined;
};
export type AppParamsList = {
  Home: undefined;
  Error: {item: TransactionRecord};
  DetailsOne: {item: TransactionRecord};
  DetailsTwo: {item: TransactionRecord};
};
export type RootParamsList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Error: {item: TransactionRecord};
  DetailsOne: {item: TransactionRecord};
  DetailsTwo: {item: TransactionRecord};
  Auth: undefined;
  App: undefined;
};

export type authNavigationProps<T extends keyof AuthParamsList> = {
  navigation: StackScreenProps<AuthParamsList, T>;
};
export type PropsLogin = StackScreenProps<AuthParamsList, 'SignUp'>;
export type appNavigationProps<T extends keyof AppParamsList> = {
  navigation: StackScreenProps<AppParamsList, T>;
};
export type rootNavigationProps<T extends keyof RootParamsList> = {
  navigation: StackScreenProps<RootParamsList, T>;
};
export type ScreenProps<T extends keyof RootParamsList> = StackScreenProps<
  RootParamsList,
  T
>;
