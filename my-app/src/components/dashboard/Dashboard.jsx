import ActivityCard from "../activityCard/ActivityCard";
import RecentActivity from "../recentActivity/RecentActivity";
import { useContext } from "react";
import { UserContext } from "../userProvider/UserProvider";
import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  const activityData = [
    {
      activityName: "Profile",
      context: user?.username || "Unknown",
      status: "Active User",
      logoUrl: "/user-white.svg",
      statusLogo: "/circle-check-big.svg",
      backgroundColor: "linear-gradient(to right,rgb(117, 159, 237),rgb(5, 96, 252))",
    },
    {
      activityName: "Email",
      context: user?.email || "No email found",
      status: "Verified Account",
      logoUrl: "/mail-white.svg",
      statusLogo: "/circle-check-big.svg",
      backgroundColor: "linear-gradient(to right,rgb(239, 129, 92),rgb(252, 5, 5))",
    },
    {
      activityName: "Last Login",
      context: "Today",
      status: "Session Active",
      logoUrl: "/calendar.svg",
      statusLogo: "/clock.svg",
      backgroundColor: "linear-gradient(to right,rgb(117, 237, 127),rgb(0, 139, 7))",
    },
  ];

  return (
    <>
      <div className="cards">
        {activityData.map((activity, index) => (
          <ActivityCard
            key={index}
            activityName={activity.activityName}
            context={activity.context}
            status={activity.status}
            logoUrl={activity.logoUrl}
            statusLogo={activity.statusLogo}
            backgroundColor={activity.backgroundColor}
          />
        ))}
      </div>
      <RecentActivity />
    </>
  );
}