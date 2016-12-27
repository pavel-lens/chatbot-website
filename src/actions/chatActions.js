import * as types from '../constants/actionTypes';

export function chatAddMessage(message) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      console.log('Adding new message:');
      console.log(message);
      const words = message.message.split(' ').length;

      const pmsg = {
        author: message.author,
        message: '...',
      };

      dispatch({
          type: types.CHAT_ADD_MESSAGE,
          payload: {
            message: pmsg,
          },
        });

      setTimeout(() => {
        dispatch({
          type: types.CHAT_REPLACE_LAST_MESSAGE,
          // type: types.CHAT_ADD_MESSAGE,
          payload: {
            message: message,
          },
        });

        resolve();
      }, 800+((Math.random()+0.2)*(words*500)));
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
