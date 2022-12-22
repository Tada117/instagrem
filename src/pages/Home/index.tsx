import { CogIcon } from "@heroicons/react/24/outline";
import { BeakerIcon } from "@heroicons/react/24/solid";
import Post from "components/Post";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="relative -mr-4 ml-64 flex justify-center gap-4">
      <div className="h-[200vh] w-96 bg-bg-primary"></div>
      <div className="sticky top-0 h-80 w-80 bg-blue-200"></div>
    </div>
  );
};

export default HomePage;
