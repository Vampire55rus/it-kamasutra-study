const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
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
      updateTextMsg(newText) {
        this.newTextMsg = newText;
        store._callSubscriber();
      },
      addMsg() {
        let newMsg = {
          msg: this.newTextMsg === "" ? "Пустое сообщение" : this.newTextMsg,
        };
        this.aMessages.push(newMsg);
        this.newTextMsg = "";

        store._callSubscriber();
      },
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

  //   Сторонние методы
  //   addPost() {
  //     let newPost = {
  //       id: this._state.aProfilePage.aPosts.length + 1,
  //       msg: this._state.aProfilePage.newPostText,
  //       likes: 0,
  //     };
  //     this._state.aProfilePage.aPosts.push(newPost);
  //     this._state.aProfilePage.newPostText = "";
  //     this._callSubscriber();
  //   },
  //   updateNewPostText(newText) {
  //     this._state.aProfilePage.newPostText = newText;
  //     this._callSubscriber();
  //   },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.aProfilePage.aPosts.length + 1,
        msg: this._state.aProfilePage.newPostText,
        likes: 0,
      };
      this._state.aProfilePage.aPosts.push(newPost);
      this._state.aProfilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.aProfilePage.newPostText = action.newText;
      this._callSubscriber();
    }
  },
};
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreactor = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
let rerenderApp = () => {
  console.log("state changed");
};

// let state = {
//   aDialogPage: {
//     aDialogs: [
//       {
//         id: 1,
//         name: "Пользователь 1",
//         icon: "https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/231/among-us-player-blue-512.png",
//       },
//       {
//         id: 2,
//         name: "Пользователь 2",
//         icon: "https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_red_icon_156942.png",
//       },
//       {
//         id: 3,
//         name: "Пользователь 3",
//         icon: "https://cdn.icon-icons.com/icons2/2620/PNG/512/among_us_player_white_icon_156940.png",
//       },
//       {
//         id: 4,
//         name: "Пользователь 4",
//         icon: "https://cdn.iconscout.com/icon/free/png-256/among-us-3187356-2669554.png",
//       },
//       {
//         id: 5,
//         name: "Пользователь 5",
//         icon: "https://cdn.iconscout.com/icon/free/png-256/among-us-3187365-2669563.png",
//       },
//     ],
//     aMessages: [
//       { msg: "Сообщение номер 1" },
//       { msg: "Сообщение номер 2" },
//       { msg: "Сообщение номер 3" },
//       { msg: "Сообщение номер 4" },
//     ],
//     newTextMsg: "Новое сообщение",
//     updateTextMsg: (newText) => {
//       state.aDialogPage.newTextMsg = newText;
//       rerenderApp();
//     },
//     addMsg: () => {
//       let newMsg = {
//         msg:
//           state.aDialogPage.newTextMsg == ""
//             ? "Пустое сообщение"
//             : state.aDialogPage.newTextMsg,
//       };
//       state.aDialogPage.aMessages.push(newMsg);
//       state.aDialogPage.newTextMsg = "";

//       rerenderApp();
//     },
//   },
//   aProfilePage: {
//     aPosts: [
//       { id: 1, msg: `Я текст 1`, likes: 14 },
//       { id: 2, msg: `Я текст 2`, likes: 16 },
//       { id: 3, msg: `Я текст 3`, likes: 5 },
//       { id: 4, msg: `Я текст 4`, likes: 0 },
//     ],
//     newPostText: "Тестовое сообщение",
//   },
// };

// export let addPost = () => {
//   let newPost = {
//     id: state.aProfilePage.aPosts.length + 1,
//     msg: state.aProfilePage.newPostText,
//     likes: 0,
//   };
//   state.aProfilePage.aPosts.push(newPost);
//   state.aProfilePage.newPostText = "";
//   rerenderApp();
// };

// export const updateNewPostText = (newText) => {
//   state.aProfilePage.newPostText = newText;
//   rerenderApp();
// };

// export const subscribe = (observer) => {
//   rerenderApp = observer;
// };

export default store;
window.state = store;
