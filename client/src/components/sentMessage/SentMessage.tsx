import './sent.css'
import messagesStore from '../../app/store/messagesStore';
import userStore from '../../app/store/userStore';
import chatStore from '../../app/store/chatsStore';
import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useShallow } from 'zustand/shallow';
import { getCurrentTime } from '../../utility/getCurrentTime';
import { useNavigate } from 'react-router';

function SentMessage({ }) {
  const {currentChat} = chatStore()
  const {addMessage} = messagesStore(useShallow(state => ({
    addMessage: state.addMessage
  })))
  const navigate = useNavigate()

  const {users, currentUser} = userStore()
    const [text, setText] = useState('')
    const sentMessage = () => {
        if (!currentChat) {
            // alert('выбери чат, придурок!11!!')
            return
        }
        if(!users){
            // alert('Вы не вошли в аккаунт')
            navigate('/auth')
            return
        }
        if(!currentChat){
            // alert('Ты не человек')
            return
        }
        if(!currentUser){
            // alert('Войдите в акканут')
            navigate('/auth')
            return
        }
        if(text.trim()){
        const newMessage=  {
            chatId: currentChat.id,
            content: text.trim(),
            userId: currentUser.id,
            date: getCurrentTime()
        }
        addMessage(newMessage)
        setText('')
    }
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sentMessage();
    }
};

return (
    <>
        <div className="sentBlock">
            <input
                className='label'
                type="text"
                value={text}
                placeholder='Message'
                onKeyDown={handleKeyDown}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    </>
);
}

export default SentMessage;