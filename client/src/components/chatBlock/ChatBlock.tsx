import {useCallback} from 'react';
import './chatBlock.css'
import Message from '../message/Message';
import SentMessage from '../sentMessage/SentMessage';
import ChatHeader from './ChatHeader/ChatHeader';
import messagesStore from '../../app/store/messagesStore';
import userStore from '../../app/store/userStore';
import chatStore from '../../app/store/chatsStore';

function ChatBlock({}) {

  const {messages} = messagesStore()
  const  {currentUser} = userStore()
  const {currentChat} = chatStore()

  const messagesContainerRef = useCallback((chat: HTMLDivElement) => {
    if (chat !== null) {
      chat.scrollTop = chat.scrollHeight;
    }
  }, [messages]);


  // useEffect(() => {
  //   if (messagesContainerRef.current) {
  //     messagesContainerRef.current.scrollTop =
  //       messagesContainerRef.current.scrollHeight;
  //   }
  // }, [messages]);


    const messageIn = {
        box: 'incoming',
        message: 'messIn'
    }

    const messageOut = {
        box: 'outgoing',
        message: 'messOut'
    }


  return (
   <>
{ currentChat !== null ?  <div className='fullBlock'>
    <div className="header">
      <ChatHeader/>
    </div>
    <div className="Chat">
      <div className="MessBlock">
          <div className="block" ref={messagesContainerRef}>
            {currentChat ? (messages.filter(({chatId}) => chatId === currentChat.id)
            .map(el =>
            (<Message message={el}
            key={el.chatId}
            messClass={el.userId === currentUser?.id ? messageOut : messageIn}/>))) : <div></div>}
          </div>
      </div>
    </div>
        <div className="sentBlock">
          <SentMessage/>
        </div>
   </div> : <div className=""></div>}
   </>
  );
}

export default ChatBlock;