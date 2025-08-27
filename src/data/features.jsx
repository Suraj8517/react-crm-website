
import { MdManageAccounts, MdPayments } from 'react-icons/md';
import { FaUsers } from "react-icons/fa6";
import { AiFillSchedule } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { TbAutomation } from "react-icons/tb";
import { IoIosChatbubbles } from "react-icons/io";
import { CgInsights } from "react-icons/cg";
import client from '../assets/clients.png';
import leads from '../assets/leads.png';
import payments from '../assets/Payments -_ List of Payments 5.jpg';
import client_progress from '../assets/Clients -_ Progress -_ Progress Images.jpg';
import workflow from '../assets/Workflow.jpg';
import engage from '../assets/interactions.png';
import logo from '../assets/Vmax Logo 2.png';
import finance from '../assets/finance.png';const features = [
  { title: 'Lead Management', shortTitle: 'Leads', desc: 'Capture inquiries from trial signups, social media, or referrals, and convert them into paying members with organized tracking.', img: leads, icon: <MdManageAccounts /> },
  { title: 'Client Management', shortTitle: 'Clients', desc: 'Keep member profiles updated with workout plans, diet schedules, and progress records all in one place.', img: client, icon: <FaUsers /> },
  { title: 'Appointment Scheduling', shortTitle: 'Schedule', desc: 'Allow clients to easily book diet consultations, training sessions, or fitness classes with automated reminders.', img: leads, icon: <AiFillSchedule /> },
  { title: 'Client Progress Tracking', shortTitle: 'Progress', desc: 'Track member weight, BMI, workouts, and meal plan adherence with clear dashboards and reports.', img: client_progress, icon: <GiProgression /> },
  { title: 'Payment Tracking', shortTitle: 'Payments', desc: 'Manage membership fees, dietitian packages, and renewals with automated invoices and reminders.', img: payments, icon: <MdPayments /> },
  { title: 'Workflow Automation', shortTitle: 'Workflow', desc: 'Automate trial follow-ups, class reminders, and diet check-ins to save time and boost engagement.', img: workflow, icon: <TbAutomation /> },
  { title: 'Communication Tools', shortTitle: 'Engage', desc: 'Stay connected with clients via chat, email, or SMS for quick updates on diet, workouts, or offers.', img: engage, icon: <IoIosChatbubbles /> },
  { title: 'Finance Management', shortTitle: 'Finance', desc: 'Easily manage revenues, expenses, and memberships with clear financial reports and insights for better decision making.', img: finance, icon: <MdPayments /> },
  { title: 'Real-time Insights', shortTitle: 'Insights', desc: 'Get live visibility into membership status, active plans, and financial performance — anytime, anywhere.', img: leads, icon: <CgInsights /> },
];
export default features;