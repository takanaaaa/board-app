import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase"
import { Link } from 'react-router-dom';

function Index() {
  const [posts, setPosts] = useState([]);

  //リロードした時に1回とってくる
  useEffect(() => {
    const postData = collection(db, "posts");

    getDocs(postData).then((snapShot) => {
      console.log((snapShot.docs.map((doc) => doc.id)))
      setPosts(snapShot.docs.map((doc) => doc.data()));
    });

    onSnapshot(postData, (post) => {
      setPosts(post.docs.map((doc) => doc.data()));
    });
  }, []);

  return(
    <table>
      <tbody>
        {posts.map((post) => (
          <tr>
            <td>
              <h1>{post.title}</h1>
            </td>
            <td>
              <p>{post.body}</p>
            </td>
            <td>
              <Link to={`detail/${post.title}/${post.body}`}>編集</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Index;