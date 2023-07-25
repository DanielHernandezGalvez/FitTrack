"use client";
import FirebaseConfig from "../FirebaseConfig/firebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { useState } from "react";

export default function FirebaseCrud() {
  const [userName, setUsername] = useState("");
  return (
    <>
      <label>Username</label>
      <input type="text" value={userName} />
    </>
  );
}
