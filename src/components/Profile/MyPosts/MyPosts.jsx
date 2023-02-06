import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  return (<div>
    MyPosts
    <div>New post
      <div>
        <textarea></textarea>
      </div>
      <div style={{paddingBottom:20}}>
        <button>Кнопка</button>
      </div>
    </div>
    <div className={styles.posts}>
      {props.posts.map(item=> <Post msg={item.msg} cntLike={item.likes} /> )}    
    </div>
  </div>)
}

export default MyPosts