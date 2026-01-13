import './chatBar.css'
import chatStore from '../../app/store/chatsStore';
import type { ChatType } from '../../app/store/chatsStore'
import userStore from '../../app/store/userStore';

function Chat({ chat }: { chat: ChatType }) {
  const { changeChat, noChat } = chatStore()
  const { users, currentUser } = userStore()


  const switchChat = (id: number) => {
    if (!currentUser){
      noChat()
      throw Error('нету юзера')
    }
    changeChat(id)  }

  const chatInfoTook = () => {
    if (currentUser) {
      return chat.members.find(el => el !== currentUser.id)
    }
    return null
  }

  const getChatPartner = () => {
    const partnerId = chatInfoTook()
    if (!partnerId) {
      // alert('Зайди в аккаунт')
      return null
    }
    const partner = users?.find(el => el.id === partnerId)
    return partner ? partner : null
  }

  return (
    <>
      <div className='chat' onClick={() => switchChat(chat.id)}>
        <div className="avatarDiv">
          <img src={getChatPartner()?.avatar} className='avatar'/>
        </div>
        <div className="details">
          <h3>{getChatPartner()?.nickname}</h3>
        </div>
      </div>
    </>
  );
}

export default Chat;