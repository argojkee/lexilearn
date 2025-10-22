import fetchCurrentUser from './fetchCurrentUser';
import signIn from './signIn';
import signUp from './signUp';
import logOut from './logOut';
import createDictionary from './createDisctionary';
import addWord from './addWord';
import changeStatus from './changeStatus';
import deleteWord from './deleteWord';
import sendToRepeat from './sendToRepeat';
import deleteDictionary from './deleteDictionary';

const userOperations = {
  fetchCurrentUser,
  signIn,
  signUp,
  logOut,
  createDictionary,
  addWord,
  changeStatus,
  deleteWord,
  sendToRepeat,
  deleteDictionary,
};

export default userOperations;
