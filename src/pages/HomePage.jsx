import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
import Card from '../components/notifications/Card';
import ProfileButton from '../components/home/ProfileButton'
import TopBar from "../components/TopBar";
import ShareIcon from "../assets/ShareIcon.png"
import TrackingIcon from "../assets/TrackingIcon.png"
import CommunityIcon from "../assets/CommunityIcon.png"
import HomeOption from "../components/home/HomeOption";

export const HomePage = () => {
  return (
    <PhoneFrame>
      <TopBar />
      <br />
      <div className="flex flex-col items-center ">
        <HomeOption
          title="TO SHARE!"
          subtitle="I have food to share"
          icon={ShareIcon}
        />
        <br />
        <br />
        <HomeOption
          title="Sharing~"
          subtitle="Track delivery progress"
          icon={TrackingIcon}
        />
        <br />
        <br />
        <HomeOption
          title="Community"
          subtitle="See the Difference"
          icon={CommunityIcon}
        />

      </div>

    </PhoneFrame>
  );
};