import { create } from 'zustand'

export type ChatType = {
  id: number
  members: string[]
  avatar: string
}

type ChatStore = {
  currentChat: ChatType | null
  chats: ChatType[]
  changeChat: (chatId: number) => void
  noChat: () => void
}

const chatStore = create<ChatStore>((set) => ({
  currentChat: null,
  chats: [
    {
      id: 1,
      members: ['s', 'a'],
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLcg0tv02s1RQ212mFtFm10JHQESFo8dMMg&s',
    },
  ],
  changeChat: (chatId: number) => set((state) => ({
    currentChat: state.chats.find((chat) => chat.id === chatId) || null
  })),
  noChat: () => set(()=> ({currentChat: null}))
}))

export default chatStore