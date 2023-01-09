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
import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";

const menu = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon className="h-6 w-6 stroke-text-primary" />,
  },
  {
    title: "Search",
    path: "/",
    icon: <MagnifyingGlassIcon className="h-6 w-6 stroke-text-primary" />,
  },
  {
    title: "Explore",
    path: "/explore",
    icon: <GlobeAltIcon className="h-6 w-6 stroke-text-primary" />,
  },
  {
    title: "Reels",
    path: "/reels",
    icon: <VideoCameraIcon className="h-6 w-6 stroke-text-primary" />,
  },
  {
    title: "Message",
    path: "/message",
    icon: (
      <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 stroke-text-primary" />
    ),
  },
  {
    title: "Notification",
    path: "/",
    icon: <HeartIcon className="h-6 w-6 stroke-text-primary" />,
  },
  {
    title: "Create",
    path: "/",
    icon: <SquaresPlusIcon className="h-6 w-6 stroke-text-primary" />,
  },
];
const Sidebar = (): ReactElement => {
  return (
    <>
      <div className="fixed top-0 bottom-0 w-64 bg-bg-primary p-3 text-base">
        <div className="mb-5 flex items-center p-4">
          <img src={logo} alt="logo" />
        </div>
        {menu.map((item) => (
          <Link
            to={item.path}
            key={item?.title}
            className="my-1 flex cursor-pointer items-center gap-4 rounded-3xl p-3 hover:bg-bg-secondary"
          >
            <div className="flex">{item.icon}</div>
            <div className="text-dark-text-primary">{item.title}</div>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
