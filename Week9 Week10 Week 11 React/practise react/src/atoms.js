import { atom,selector} from "recoil";
export const MynetworkAtom= atom({
  key:"mynetwork",
  default: 10
})
export const JobsAtom= atom({
  key:"jobs",
  default: 5
})
export const MessagingAtom= atom({
  key:"messages",
  default: 20
})
export const NotificationsAtom= atom({
  key:"notification",
  default: 102
})
export const totalnotificationselector = selector({
  key:"totalnotificationselector",
  get:function({get}){
    return get(MessagingAtom)+get(NotificationsAtom)+get(JobsAtom)+get(MynetworkAtom) // returns the totals notifications we got, the state we are deriving from we have to mention them like MessagingAtom and all
  }
})