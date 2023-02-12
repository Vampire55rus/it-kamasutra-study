import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let textareaElement = React.createRef();
  let addPost = () => {
    // props.addPost();
    props.dispatch({type:"ADD-POST"})
  };

  let onChangeTextPost = () => {
    let text = textareaElement.current.value;
    // props.updateNewPostText(text);
    props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:text})
  };
  return (
    <div>
      MyPosts
      <div>
        New post
        <div>
          <textarea
            ref={textareaElement}
            onChange={onChangeTextPost}
            value={props.newPostText}
          ></textarea>
        </div>
        <div style={{ paddingBottom: 20 }}>
          <button onClick={addPost}>Кнопка</button>
        </div>
      </div>
      <div className={styles.posts}>
        {props.posts.map((item, index) => (
          <Post key={index} msg={item.msg} cntLike={item.likes} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
