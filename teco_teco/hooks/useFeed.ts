import { useState } from 'react';

let globalPosts = [
  {
    caption: 'mood 💙',
    image: 'https://i.pinimg.com/736x/b5/18/41/b5184171fd55fc19e78ef17459bdd908.jpg'
  },
  {
    caption: 'blue aesthetic',
    image: 'https://i.pinimg.com/1200x/90/82/12/9082121361b8c538bb49d62805ae9943.jpg'
  },
  {
    caption: 'vsco vibes',
    image: 'https://i.pinimg.com/1200x/73/d8/aa/73d8aa28d40b13a20fa62ec4ebda715f.jpg'
  },
  {
    caption: 'soft life',
    image: 'https://i.pinimg.com/736x/f8/00/be/f800bea4f45729f2edb06830c44482c9.jpg'
  },
  {
    caption: 'aesthetic post',
    image: 'https://i.pinimg.com/736x/97/0e/aa/970eaa3354a6b9c3556509816b662cb6.jpg'
  }
];

export function useFeed() {
  const [posts, setPosts] = useState(globalPosts);

  function addPost(post: any) {
    globalPosts = [post, ...globalPosts];
    setPosts([...globalPosts]);
  }

  return { posts, addPost };
}