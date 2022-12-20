import logo from "assets/logo.svg";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="absolute top-0 left-1/2 mr-32 flex -translate-x-1/2 items-center justify-center p-6">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navigation;
