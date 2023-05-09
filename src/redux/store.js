import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

let store = {
  _state: {
    aDialogPage: {
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
      // updateTextMsg(newText) {
      //   this.newTextMsg = newText;
      //   store._callSubscriber();
      // },
      // addMsg() {
      //   let newMsg = {
      //     msg: this.newTextMsg === "" ? "Пустое сообщение" : this.newTextMsg,
      //   };
      //   this.aMessages.push(newMsg);
      //   this.newTextMsg = "";

      //   store._callSubscriber();
      // },
    },
    aProfilePage: {
      aPosts: [
        { id: 1, msg: `Я текст 1`, likes: 14 },
        { id: 2, msg: `Я текст 2`, likes: 16 },
        { id: 3, msg: `Я текст 3`, likes: 5 },
        { id: 4, msg: `Я текст 4`, likes: 0 },
      ],
      newPostText: "Тестовое сообщение",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.aProfilePage = profileReducer(this._state.aProfilePage, action);
    this._state.aDialogPage = dialogsReducer(this._state.aDialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: this._state.aProfilePage.aPosts.length + 1,
    //     msg: this._state.aProfilePage.newPostText,
    //     likes: 0,
    //   };
    //   this._state.aProfilePage.aPosts.push(newPost);
    //   this._state.aProfilePage.newPostText = "";
    //   this._callSubscriber();
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.aProfilePage.newPostText = action.newText;
    //   this._callSubscriber();
    // } else if (action.type === ADD_MESSAGE) {
    //   let newMsg = {
    //     msg:
    //       this._state.aDialogPage.newTextMsg === ""
    //         ? "Пустое сообщение"
    //         : this._state.aDialogPage.newTextMsg,
    //   };
    //   this._state.aDialogPage.aMessages.push(newMsg);
    //   this._state.aDialogPage.newTextMsg = "";

    //   this._callSubscriber();
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   this._state.aDialogPage.newTextMsg = action.newText;
    //   this._callSubscriber();
    // }
  },
};


let rerenderApp = () => {
  console.log("state changed");
};

export default store;
window.state = store;
