import { CogIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Post from "components/Post";
import PageWrapper from "layouts/PageWrapper";

type Props = {};
const imageUrl = [
  " https://source.unsplash.com/random",
  "https://www.ontarioparks.com/parksblog/wp-content/uploads/2020/02/Quetico_Backcountry_Winter_Camping-825x510.jpg",
  "https://images.unsplash.com/photo-1598896189857-ea965a5e1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fDklM0ExNnxlbnwwfHwwfHw%3D&w=1000&q=80",
  "https://etc.usf.edu/clipart/21900/21988/square_21988_lg.gif",
  "https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
];

const HomePage = (props: Props) => {
  return (
    <PageWrapper>
      <div className="flex flex-col gap-4">
        {imageUrl.map((url, index) => (
          <Post imageUrl={url} key={index} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default HomePage;
