export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = (user) => ({
  type: SIGN_IN,
  user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});
