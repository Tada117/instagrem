import Post from "components/Post";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="flex gap-16">
      <div className="flex basis-full flex-col gap-8 md:basis-2/3">
        <Post />
        <Post />
      </div>
      <div className="hidden basis-1/3 bg-light-100 dark:bg-dark-700 md:flex"></div>
    </div>
  );
};

export default HomePage;
