const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  aPosts: [
    { id: 1, msg: `Я текст 1`, likes: 14 },
    { id: 2, msg: `Я текст 2`, likes: 16 },
    { id: 3, msg: `Я текст 3`, likes: 5 },
    { id: 4, msg: `Я текст 4`, likes: 0 },
  ],
  newPostText: "Тестовое сообщение",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.aPosts.length + 1,
        msg: state.newPostText,
        likes: 0,
      };
      state.aPosts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostTextActionCreactor = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};
