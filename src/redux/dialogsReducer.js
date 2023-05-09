const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  aDialogs: [
    {
      id: 1,
      name: "Пользователь 1",
      icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-blue-512.png",
    },
    {
      id: 2,
      name: "Пользователь 2",
      icon: "https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png",
    },
    {
      id: 3,
      name: "Пользователь 3",
      icon: "https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_white_icon_156940.png",
    },
    {
      id: 4,
      name: "Пользователь 4",
      icon: "https://cdn.iconscout.com/icon/free/png-256/among-us-3187356-2669554.png",
    },
    {
      id: 5,
      name: "Пользователь 5",
      icon: "https://cdn.iconscout.com/icon/free/png-256/among-us-3187365-2669563.png",
    },
  ],
  aMessages: [
    { msg: "Сообщение номер 1" },
    { msg: "Сообщение номер 2" },
    { msg: "Сообщение номер 3" },
    { msg: "Сообщение номер 4" },
  ],
  newTextMsg: "Новое сообщение",
};

export const dialogsReducer = (state = initialState, action) => {
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
