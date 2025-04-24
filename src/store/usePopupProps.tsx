import { create } from 'zustand'

type Store = {
  openedType: string,
  toggleOpen: (type:string) => void,
  src: string | undefined,
  setSrc: (newSrc:string) => void
  id: number | undefined,
  setId: (nweId:number) => void
}


const usePopupProps = create<Store>()((set) => ({
  openedType: "",
  src: "",
  setSrc: (newSrc) => set((state) => ({ src: newSrc })),
  id: 0,
  setId: (newId) => set((state) => ({ id: newId })),
  toggleOpen: (type) => set((state) => ({ openedType: type })),
}))

export default usePopupProps;