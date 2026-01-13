import './message.css'
import type { MessageType } from '../../app/store/messagesStore';


type MessClass = {
  box: string;
  message: string;
}


type MessageProps = {
  messClass: MessClass;
  message: MessageType;
}

function Message({ message, messClass }: MessageProps) {
  return (
   <>
   <div className={messClass.box}>
        <div className={messClass.message}>
            {message.content}
        </div>
    </div>
   </>
  );
}

export default Message;