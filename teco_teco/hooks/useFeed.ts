import { useState } from 'react';

export function useFeed() {
  const [posts, setPosts] = useState([
    {
      image: 'https://i.pinimg.com/736x/66/6e/1b/666e1b01bdfd5ad8071c07e07247deed.jpg',
      caption: 'blue mood 💙',
    },
    {
      image: 'https://i.pinimg.com/736x/00/de/dc/00dedccebacd887f26dc1aa9f66709fe.jpg',
      caption: 'soft aesthetic',
    },
    {
      image: 'https://i.pinimg.com/736x/d8/86/0d/d8860d5a7bc19a2c5ccde835f96e1ed7.jpg',
      caption: 'calm vibes',
    },
    {
      image: 'https://i.pinimg.com/736x/e9/24/a2/e924a2f96a833a9987fc6da3598013eb.jpg',
      caption: 'just breathe',
    },
    {
      image: 'https://i.pinimg.com/736x/a6/25/82/a625823cf0ea4b50ce912a5f9db8c862.jpg',
      caption: 'late night thoughts',
    },
  ]);

  function addPost(post: any) {
    setPosts([post, ...posts]);
  }

  return { posts, addPost };
}