import { fromJS } from 'immutable';

const initialState = fromJS({
  chatVisibility: false,
  chatBtn: true,
  htmlMenuBefore: null,
  modalPost: false,
  uploadWidth: 0
});

function modal(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_CHAT':
      return state.merge({
        chatVisibility: action.payload.chatVisibility,
        chatBtn: action.payload.chatBtn
      });
    case 'CLOSE_CHAT':
        return state.merge({
          chatVisibility: action.payload.chatVisibility,
          chatBtn: action.payload.chatBtn
        });
    case 'REF_CHAT_BUTTON': {
      return state.set('htmlMenuBefore', action.payload.htmlMenuBefore)
    }
    case 'CLOSE_MODAL': {
      return state.set('modalPost', false);
    }
    case 'OPEN_MODAL': {
      return state.set('modalPost', true);
    }
    case 'UPLOAD_PROGRESS': {
      return state.set('uploadWidth', action.payload.width);
    }
    default:
      return state;
  }
}

export default modal;