import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebase"

function Create() {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const postsCollectionRef = collection(db, "posts");

  const creatPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(
        postsCollectionRef,
        {title: newTitle, body: newBody}
      );

      console.log(newTitle,newBody )
    } catch(error) {
      alert("作成することができませんでした。")
    }
  };

  // handleOnSubmit = (values) => {
    // const postsRef = collection(db, "posts")
    // ,{
    //   title: values.title,
    //   body: values.body
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // });
  // };

  return(
    <div className='container'>
      <h3>新規投稿</h3>
      <form>
        <label>タイトル</label>
        <input
          name='title'
          placeholder='タイトルを入力してください'
          value={newTitle}
          onChange={(event) => {setNewTitle(event.target.value)}}
         />
        <label>本文</label>
        <input
          name='body'
          placeholder='本文を入力してください'
          value={newBody}
          onChange={(event) => {setNewBody(event.target.value)}}
         />
         <button onClick={creatPost}>
           <Link to="/">作成</Link>
          </button>
      </form>
      <div><Link to="/">一覧へ戻る</Link></div>
    </div>
  );
};

export default Create;