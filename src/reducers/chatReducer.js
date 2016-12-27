import {
  CHAT_ADD_MESSAGE,
  CHAT_REPLACE_LAST_MESSAGE,
  CHAT_SET_OPTIONS,
 } from '../constants/actionTypes'
import initialState from './initialState';

export default function chatReducer (state = initialState.chat, action) {
  const { type, payload } = action;

  switch (type) {
    case CHAT_ADD_MESSAGE: {
      const newMessages = state.messages.map((m) => Object.assign({}, m, {loading: false}));
      newMessages.push(payload.message);

      return Object.assign({}, state, { messages: newMessages });
    }

    case CHAT_REPLACE_LAST_MESSAGE: {
      const newMessages = state.messages.map((m, idx) => {
        if (idx == state.messages.length-1)
          return Object.assign({}, m, payload.message);

        return Object.assign({}, m, {loading: false});
      });

      return Object.assign({}, state, { messages: newMessages });
    }

    case CHAT_SET_OPTIONS: {
      return Object.assign({}, state, { options: payload.options })
    }

    default:
      return state;
  }
}
