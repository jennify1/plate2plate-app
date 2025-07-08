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

      <br />
      <div className="flex flex-col items-center mt-10">
        <Link to="/donations">
        <HomeOption
          title="Donate"
          subtitle="Be the Solution"
          icon={ShareIcon}
        />
        </Link>
        <br />
        <br />
        <Link to="/sharing">
        <HomeOption
          title="Sharing"
          subtitle="Plate to a Plate"
          icon={TrackingIcon}
        />
        </Link>
        <br />
        <br />
        <Link to="/community">
        <HomeOption
          title="Community"
          subtitle="See the Difference"
          icon={CommunityIcon}
        />
        </Link>

      </div>

    </PhoneFrame>
  );
};