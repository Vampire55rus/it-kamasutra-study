const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {
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
