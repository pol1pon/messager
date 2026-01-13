import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

export interface MessageType {
  chatId: number | null
  messageID?: string
  content: string
  userId: string
  date: string
}

interface MessagesStore {
  messages: MessageType[]
  addMessage: (newMessage: Omit<MessageType, 'messageID'>) => void
}

const messagesStore = create<MessagesStore>((set) => ({
  messages: [
    {
      chatId: 1,
      messageID: uuid(),
      content: 'Пупа',
      userId: 's',
      date: '08:46'
    },
    {
      chatId: 1,
      messageID: uuid(),
      content: 'Идет',
      userId:'a',
      date: '09:03'
    },
    {
      chatId: 1,
      messageID: uuid(),
      content: 'за',
      userId: 's',
      date: '09:37'
    },
    {
      chatId: 1,
      messageID: uuid(),
      content: 'Лупой',
      userId: 'a',
      date: '09:59'
    }
  ],
  addMessage: (newMessage) => set((state) => ({
    messages: [...state.messages, { ...newMessage, messageID: uuid() }]
  }))
}))

export default messagesStore