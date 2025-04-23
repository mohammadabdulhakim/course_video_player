import { topics } from '@/data/dummy';
import { create } from 'zustand'

type Store = {
  isVideoWide: boolean,
  src: string | undefined,
  toggleWide: () => void,
  setSrc: (newSrc:string) => void
}


const currentTopic = (localStorage.getItem("currentTopic") && JSON.parse(localStorage.getItem("currentTopic") || "")) || {id: 1};
const useVideoProps = create<Store>()((set) => ({
  isVideoWide: false,
  src: topics.find((topic)=> topic.id == currentTopic.topicId)?.subTopics.find((subTopic)=> {return subTopic.id == currentTopic.subTopicId})?.src,
  setSrc: (newSrc) => set((state) => ({ src: newSrc })),
  toggleWide: () => set((state) => ({ isVideoWide: !state.isVideoWide })),
}))

export default useVideoProps;