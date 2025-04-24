import { create } from 'zustand'

type Store = {
  isVideoWide: boolean,
  toggleWide: () => void,
}


const useVideoProps = create<Store>()((set) => ({
  isVideoWide: false,
  toggleWide: () => set((state) => ({ isVideoWide: !state.isVideoWide })),
}))

export default useVideoProps;