import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (<div>
    MyPosts
    <div>New post</div>
    <div className={styles.posts}>
      <Post msg={`Я текст 1`} cntLike={5} />      
      <Post msg={`Я текст 2`} cntLike={10} />      
    </div>
  </div>)
}

export default MyPosts