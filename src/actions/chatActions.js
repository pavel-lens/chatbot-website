import * as types from '../constants/actionTypes';

const CHAT_DELAYS = 1;

export function chatAddMessage(message, delayed=false) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      // console.log('Adding new message:');
      // console.log(message);
      const wordCount = message.message.split ? message.message.split(' ').length : Math.random()*7;

      const pmsg = {
        author: message.author,
        message: '...',
      };

      // Delayed message to illustrate user behavior
      if (delayed) {
        setTimeout(() => {
          dispatch({ type: types.CHAT_ADD_MESSAGE, payload: { message: pmsg } });
        }, CHAT_DELAYS*(350+(Math.random()*0.5)));

        setTimeout(() => {
          dispatch({ type: types.CHAT_REPLACE_LAST_MESSAGE, payload: { message: message } });
          resolve();
        }, CHAT_DELAYS*(700+((Math.random()+0.2)*(wordCount*200))));

      // Display message instantly
      } else {
        dispatch({
          type: types.CHAT_ADD_MESSAGE,
          payload: { message: message },
        });
        resolve();
      }
    });
  };
}

export function chatSetOptions(options) {
  return {
    type: types.CHAT_SET_OPTIONS,
    payload: {
      options: options,
    },
  }
}
