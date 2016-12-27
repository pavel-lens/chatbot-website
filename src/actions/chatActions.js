import * as types from '../constants/actionTypes';

export function chatAddMessage(message) {
  return function (dispatch) {
    console.log('Adding new message:');
    console.log(message);
    const msg = {
      author: 'Visitor',
      message: message,
    };
    const pmsg = {
      author: 'Visitor',
      message: '...',
    };

    setTimeout(() => dispatch({
        type: types.CHAT_REPLACE_LAST_MESSAGE,
        payload: {
          message: msg,
        },
      })
    , 500);

    dispatch({
      type: types.CHAT_ADD_MESSAGE,
      payload: {
        message: pmsg,
      },
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
