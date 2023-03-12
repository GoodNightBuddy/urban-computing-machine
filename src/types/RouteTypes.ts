export interface IRoutePath {
  ROOT: '/';
  SIGN_UP: 'sign-up/';
  SIGN_IN: 'sign-in/';
  CHARACTER: 'characters/:characterId';
  ANY: '*';
  CD: '../'
}

export const RoutePath: IRoutePath = {
  ROOT: '/',
  SIGN_UP: 'sign-up/',
  SIGN_IN: 'sign-in/',
  CHARACTER: 'characters/:characterId',
  CD: '../',
  ANY: '*'
}
