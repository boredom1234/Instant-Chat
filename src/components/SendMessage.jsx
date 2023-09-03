  import {
    addDoc,
    collection,
    serverTimestamp,
    getDocs,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { useState } from "react";
  import { UserAuth } from "../context/AuthContext";
  import { db } from "../firebase";

  const SendMessage = () => {
    const [value, setValue] = useState("");
    const { currentUser } = UserAuth();

    const handleSendMessage = async (e) => {
      console.log(value);
      e.preventDefault();

      if (value.trim() == "") {
        alert("Enter Valid Message");
        return;
      }

      if (value.trim() === "/del") {
        const messagesRef = collection(db, "messages");
        const querySnapshot = await getDocs(messagesRef);

        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
        });
        setValue("");
        return;
      }

      try {
        const { uid, displayName, photoURL } = currentUser;
        await addDoc(collection(db, "messages"), {
          text: value,
          name: displayName,
          avatar: photoURL,
          creaetedAt: serverTimestamp(),
          uid,
        });
      } catch (error) {
        console.log(error);
      }
      setValue("");
    };

    return (
      <div
        className="z-10 fixed bottom-0 w-full py-8 shadow-lg"
        style={{ backgroundColor: "#191E24", borderColor: "#191E24" }}
      >
        <form onSubmit={handleSendMessage} className=" px-2 containerWrap flex">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input input-secondary w-full"
            type="text"
            placeholder="Enter your message..."
          />
          <button
            type="submit"
            // className="w-auto text-white rounded-r-lg px-5 text-sm"
            className="btn btn-ghost"
          >
            Send
          </button>
        </form>
      </div>
    );
  };

  export default SendMessage;
