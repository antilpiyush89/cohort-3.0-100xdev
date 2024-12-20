import HomeIcon from "../components/icons/Home"
import UserIcon from "../components/icons/user"
import WebinarIcon from "../components/icons/webinar"
import BillingIcon from "../components/icons/billing"
import SettingIcon from "../components/icons/setting"
import Calander from "../components/icons/calander"
import Camera from "../components/icons/camera"

export const SidebarData=[{
  title:"Home",
  icon:<HomeIcon/>
},
{
  title:"User",
  icon:<UserIcon class="pt-2"/>
},
{
  title:"Webinar",
  icon:<WebinarIcon class="pt-2"/>
},
{
  title:"Billing",
  icon:<BillingIcon class="pt-2"/>
},
{
  title:"Setting",
  icon:<SettingIcon class="pt-2"/>
}]


export const UserProfileData=[
  {title:"Piyush Antil",img:"https://i.ibb.co/TPnvc7c/Whats-App-Image-2024-12-19-at-12-10-09-PM.jpg",email:"antilpiyush@gmail.com",phone:"8368180676",location:"Delhi,India"},]
  
export const ScheduleData=[
  {time:"11:30 AM",time2:"11:30 AM",type:"Live",title:"UX Webinar",camera:<Camera/>},
  {time:"11:30 AM",time2:"11:30 AM",type:"Upcoming",title:"My first Webinar",camera:<Camera/>},
  {time:"11:30 AM",time2:"11:30 AM",type:"Upcoming",title:"Important Webinar",camera:<Camera/>},
  {time:"11:30 AM",time2:"11:30 AM",type:"Upcoming",title:"Webinar 1",camera:<Camera/>}
]
