const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMsg = {
        msg: state.newTextMsg === "" ? "Пустое сообщение" : state.newTextMsg,
      };
      state.aMessages.push(newMsg);
      state.newTextMsg = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newTextMsg = action.newText;
      return state;
    default:
      return state;
  }
};
export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
export const updateNewMessageTextActionCreactor = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};
