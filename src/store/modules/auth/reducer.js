import produce from 'immer';
const STATE_INICIAL = {
  token: null,
  signed: false,
  user: false,
  id: null,
  name: null,
  loading: false,
};

export default function auth(state = STATE_INICIAL, action) {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.user = action.payload.user.admin;
        draft.id = action.payload.user.id;
        draft.name = action.payload.user.name;
      });
    case 'SIGNIN_FAILURE':
      return produce(state, draft => {
        draft.token = STATE_INICIAL.token;
        draft.signed = false;
      });
    default:
      return state;
  }
}
