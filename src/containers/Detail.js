import { getDocs, collection, updateDoc, doc, deleteDoc, deleteField } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import { db } from "./../firebase";
import { Link, useParams } from 'react-router-dom';

function Detail() {
  const [post, setPost] = useState([]);
  const params =useParams();
  const postData = collection(db, "posts")
  var arrayPosts = [];
  
  useEffect(() => {
    getDocs(postData).then((snapShot) => {
      const posts = snapShot.docs
      posts.forEach((post) => {
        if(post.data().title === params.uid1) {
          const data = post.data()
          arrayPosts.push({
            title: data.title,
            body: data.body,
            id: post.id
        });
        } else {
          return
        }
      });
      setPost(arrayPosts[0])
    });
  }, []);

  console.log(params.uid1)
  console.log(params.uid2)
  console.log(post)

  const [editTitle, setEditTitle] = useState(params.uid1);
  const [editBody, setEditBody] = useState(params.uid2);

  const editPost = async (e) => {
    e.preventDefault();
    const newPostRef = doc(db, "posts", post.id);
    try {
      await updateDoc(newPostRef,{
        title: editTitle,
        body: editBody
      });
      
    } catch(error) {
      alert("変更することができませんでした。")
    }
  };
  
  const deletePost = async (e) => {
    const newPostRef = doc(db, "posts", post.id);
    e.preventDefault();
    try {
      console.log(post.id)
      await deleteDoc(newPostRef);
      // await updateDoc(newPostRef,{
      //   title: deleteField(),
      //   body:deleteField()
      // });
    } catch(error) {
      alert("削除することができませんでした。")
    }
  };

  return(
    <>
    <h3>詳細・編集</h3>
    <p>{post.title}</p>
    <form>
      <input 
        name='title'
        type="text"
        value={editTitle}
        onChange={(event) => {setEditTitle(event.target.value)}}
      />
      <textarea 
        name='body'
        type="text"
        value={editBody}
        onChange={(event) => {setEditBody(event.target.value)}}
      />
      <button onClick={editPost}>
        <Link to="/">更新</Link>
      </button>
      <button onClick={deletePost}>
        <Link to="/">削除</Link>
      </button>
    </form>
    </>
  );
};

export default Detail;
