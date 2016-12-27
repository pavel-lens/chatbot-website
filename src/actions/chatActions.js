import * as types from '../constants/actionTypes';

export function chatAddMessage(message) {
  return function (dispatch) {
    console.log('Adding new message:');
    console.log(message);

    const pmsg = {
      author: message.author,
      message: '...',
    };

    setTimeout(() => dispatch({
        type: types.CHAT_REPLACE_LAST_MESSAGE,
        payload: {
          message: message,
        },
      })
    , Math.random()*1000);

    return new Promise((resolve, reject) => {
      dispatch({
        type: types.CHAT_ADD_MESSAGE,
        payload: {
          message: pmsg,
        },
      });
      resolve();
    });
  };
}

export function chatSetOptions(options) {
  return function (dispatch) {
    dispatch({
      type: types.CHAT_SET_OPTIONS,
      payload: {
        options: options,
      },
    });
  };
}
