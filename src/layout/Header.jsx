// import "./header.css";
// import { MdNotificationsNone } from "react-icons/md";


// export default function Header() {
//   return (
//     <header className="topbar">
//       <div className="topbar-left">
//         <button className="icon-btn">☰</button>
//         <span className="page-title"><h6>Home</h6></span>
//       </div>

//       <div className="topbar-right">
//         <button className="icon-btn" aria-label="Notifications">
//           <MdNotificationsNone className="notification-icon" />
//         </button>
//       </div>
//     </header>
//   );
// }

import "./header.css";
import { MdNotificationsNone } from "react-icons/md";

export default function Header({ onToggle }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn" onClick={onToggle}>☰</button>
        <h6 className="page-title">Home</h6>
      </div>

      <div className="topbar-right">
        <button className="icon-btn">
          <MdNotificationsNone className="notification-icon" />
        </button>
      </div>
    </header>
  );
}
