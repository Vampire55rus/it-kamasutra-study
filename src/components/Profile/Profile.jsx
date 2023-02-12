import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.content}>
      <div>
        <img
          style={{ width: 100 }}
          alt="шапка"
          title="шапка"
          src="https://gubka-bob.ru/wp-content/uploads/2019/08/%D0%9F%D0%B0%D1%82%D1%80%D0%B8%D0%BA-%D0%A1%D1%82%D0%B0%D1%80-4-221x300.png"
        />
      </div>
      <div>Info user</div>
      <MyPosts
        posts={props.state.aPosts}
        newPostText={props.state.newPostText}
        // addPost={props.addPost}
        // updateNewPostText={props.updateNewPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
