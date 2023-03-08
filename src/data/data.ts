import { Post } from "components/Post/types";
import { User } from "types/user";

const users: User[] = [
  {
    id: "user1",
    username: "johndoe",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "user2",
    username: "janedoe",
    avatarUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
  },
  {
    id: "user3",
    username: "bobsmith",
    avatarUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
  },
  {
    id: "user4",
    username: "alisontan",
    avatarUrl: "https://example.com/avatar4.jpg",
  },
  {
    id: "user5",
    username: "davidlee",
    avatarUrl: "https://example.com/avatar5.jpg",
  },
];

export const posts: Post[] = [
  {
    id: "post1",
    userId: "user2",
    user: users.find((user) => user.id === "user2")!,
    caption: "Beautiful sunset at the beach #sunset #beach",
    locationTag: "Malibu Beach, California",
    createdTime: 1644787200,
    imageUrls: ["https://source.unsplash.com/random"],
    likes: [
      {
        id: "like1",
        userId: "user2",
        user: users.find((user) => user.id === "user2")!,
        createdTime: 1644790800,
      },
      {
        id: "like2",
        userId: "user3",
        user: users.find((user) => user.id === "user3")!,
        createdTime: 1644794400,
      },
    ],
    comments: [
      {
        id: "comment1",
        userId: "user1",
        user: users.find((user) => user.id === "user1")!,
        text: "Wow, this is breathtaking!",
        createdTime: 1644790800,
      },
      {
        id: "comment2",
        userId: "user4",
        user: users.find((user) => user.id === "user4")!,
        text: "Love the colors in this photo 😍",
        createdTime: 1644796200,
      },
    ],
  },
  {
    id: "post2",
    userId: "user3",
    user: users.find((user) => user.id === "user3")!,
    caption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque ultricies, sollicitudin felis sed, sagittis mi. 
    Morbi maximus bibendum enim, non suscipit sem pulvinar in. Vivamus vel sollicitudin nisi. Mauris ac mauris neque. 
    Ut imperdiet leo turpis, nec varius eros suscipit accumsan. Vestibulum ultricies orci at risus convallis, et ornare sem porta. 
    Aenean sit amet tincidunt neque. Cras pulvinar suscipit ante, eget auctor diam. Suspendisse in molestie augue, gravida ullamcorper ipsum. 
    Donec sed lectus luctus, accumsan nunc vulputate, laoreet quam. Ut sit amet magna a augue dignissim dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    Etiam eu sem rutrum, consequat sem id, eleifend lectus. Nam vitae mi augue. Pellentesque condimentum pellentesque laoreet. Fusce aliquam volutpat ornare.`,
    locationTag: "Malibu Beach, California",
    createdTime: 1644787200,
    imageUrls: [
      "https://images.unsplash.com/photo-1677455104504-364b0e16ef39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    ],
    likes: [
      {
        id: "like1",
        userId: "user2",
        user: users.find((user) => user.id === "user2")!,
        createdTime: 1644790800,
      },
      {
        id: "like2",
        userId: "user3",
        user: users.find((user) => user.id === "user3")!,
        createdTime: 1644794400,
      },
    ],
    comments: [
      {
        id: "comment1",
        userId: "user1",
        user: users.find((user) => user.id === "user1")!,
        text: "Wow, this is breathtaking!",
        createdTime: 1644790800,
      },
      {
        id: "comment2",
        userId: "user4",
        user: users.find((user) => user.id === "user4")!,
        text: "Love the colors in this photo 😍",
        createdTime: 1644796200,
      },
    ],
  },
];
