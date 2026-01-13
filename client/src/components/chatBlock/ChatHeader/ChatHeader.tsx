import './chatHeader.css'
import chatStore from '../../../app/store/chatsStore';


function ChatHeader({}) {
  const {currentChat} = chatStore()
  return (
   <>
   <div className="allBlock">
    <div className="avatarBlock">
      <img src={currentChat?.avatar} alt="" className='headerAvatar'/>
    </div>
    <div className="userNameBlock">
      {/* <h3>{currentChat?.companion}</h3> */}
    </div>
   </div>
   </>
  );
}

export default ChatHeader;