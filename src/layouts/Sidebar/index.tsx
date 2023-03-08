import {
  ChatBubbleOvalLeftEllipsisIcon,
  GlobeAltIcon,
  HeartIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  SquaresPlusIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import logo from "assets/logo.svg";
import { slugs } from "constants/slugs";
import { Link, Outlet } from "react-router-dom";
import { MenuState } from "./types";
import uuid from "react-uuid";
import ThemeSwitch from "components/ThemeSwitch";

const menu: MenuState[] = [
  {
    id: uuid(),
    title: "Home",
    path: slugs.home,
    icon: <HomeIcon className="stroke-text-primary h-6 w-6" />,
  },
  {
    id: uuid(),
    title: "Search",
    icon: <MagnifyingGlassIcon className="stroke-text-primary h-6 w-6" />,
    onClick: () => alert("Click"),
  },
  {
    id: uuid(),
    title: "Explore",
    path: slugs.explore,
    icon: <GlobeAltIcon className="stroke-text-primary h-6 w-6" />,
  },
  {
    id: uuid(),
    title: "Reels",
    path: "/reels",
    icon: <VideoCameraIcon className="stroke-text-primary h-6 w-6" />,
  },
  {
    id: uuid(),
    title: "Message",
    path: "/message",
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="stroke-text-primary h-6 w-6" />
    ),
  },
  {
    id: uuid(),
    title: "Notification",
    icon: <HeartIcon className="stroke-text-primary h-6 w-6" />,
    onClick: () => {},
  },
  {
    id: uuid(),
    title: "Create",
    path: "/",
    icon: <SquaresPlusIcon className="stroke-text-primary h-6 w-6" />,
  },
];

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 w-64 border-r bg-ig-primary  p-3 text-base shadow-md">
        <div className="mb-5 flex items-center p-4">
          <img src={logo} alt="logo" />
        </div>
        {menu.map((item) => (
          <Link
            to={item.path ? item.path : ""}
            key={item.id}
            className="my-1 flex cursor-pointer items-center gap-4 rounded-3xl p-3 hover:bg-ig-secondary"
            onClick={item.onClick}
          >
            <div className="flex">{item.icon}</div>
            <div className="text-dark-text-primary">{item.title}</div>
          </Link>
        ))}
        <ThemeSwitch />
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
