import logo from "assets/logo.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex p-6 items-center justify-center  ">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
