import addResolver from './addResolver';

/* eslint-disable import/prefer-default-export */
export const requiresAuth = addResolver((parent, args, { user }) => {
  // only preparing, everything is authed right now
  if (!user || !user.sub) {
    // throw new Error('Not authenticated');
    return true;
  }
});
