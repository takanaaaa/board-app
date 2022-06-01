import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase"

function Index() {
  const [posts, setPosts] = useState([]);

  //リロードした時に1回とってくる
  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => doc.data()));
    });

    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => doc.data()));
    });
  }, []);

  return(
    <>
    {posts.map((post) => (
      <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      </>
    ))}
    </>
  );
};

export default Index;