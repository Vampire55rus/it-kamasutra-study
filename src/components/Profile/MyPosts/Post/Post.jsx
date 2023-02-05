import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img className={styles.icon} alt='Иконка поста' title='Иконка поста' src='https://pngicon.ru/file/uploads/panda.png'/>
      {props.msg}
      <div>{`like ${props.cntLike}`}</div>
    </div>
  )
}

export default Post