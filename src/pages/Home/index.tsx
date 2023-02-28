import Post from "components/Post";
import PageWrapper from "layouts/PageWrapper";
import { posts } from "data/data";

interface PostProps {}

const Home: React.FC<PostProps> = () => {
  return (
    <>
      <PageWrapper>
        <div className="flex justify-center ">
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
