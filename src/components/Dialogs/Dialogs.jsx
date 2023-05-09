import styles from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreactor } from "../../redux/dialogsReducer";

const Dialogs = (props) => {
  let newTextMsg = React.createRef();
  let updateTextMsg = () => {
    let text = newTextMsg.current.value;
    // props.state.updateTextMsg(text);
    props.dispatch(updateNewMessageTextActionCreactor(text))
  };
  let addMsg = () => {
    props.dispatch(addMessageActionCreator())
    //props.state.addMsg();
  };
  return (
    <>
      <div className={styles.dialogs}>
        <div className={styles.dialog_item}>
          <div className={`${styles.dialog} ${styles.header}`}>Диалоги</div>
          {props.state.aDialogs.map((item) => (
            <DialogItem
              key={`Dialog${item.id}`}
              name={item.name}
              id={item.id}
              icon={item.icon}
            />
          ))}
        </div>
        <div className={styles.messages}>
          <div className={`${styles.message} ${styles.header}`}>Сообщения</div>
          {props.state.aMessages.map((item, index) => (
            <MessageItem key={`Message${index}`} msg={item.msg} />
          ))}
          <div style={{ marginTop: 20 }}>
            Новое сообщение
            <div>
              <textarea
                ref={newTextMsg}
                value={props.state.newTextMsg}
                onChange={updateTextMsg}
              ></textarea>
            </div>
            <div>
              <button onClick={addMsg}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
