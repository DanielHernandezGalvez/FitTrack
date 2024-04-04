"use client";
import { useState } from "react";
import { ref, set, get, child } from "firebase/database";
import FirebaseConfig from "../FirebaseConfig/firebaseConfig";
import "./firebasecrud.css";

interface CustomerData {
  fullname: string;
  phone: string;
  dob: string;
}

const database = FirebaseConfig();

export default function FirebaseCrud() {
  
  const [userName, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [dob, setDob] = useState<string>("");

  const isNullWhiteSpacer = (value: string): boolean => {
    value = value.toString();
    return value === null || value.replaceAll(" ", "").length < 1;
  };

  const InsertData = () => {
    if (
      isNullWhiteSpacer(userName) ||
      isNullWhiteSpacer(fullname) ||
      isNullWhiteSpacer(phone) ||
      isNullWhiteSpacer(dob)
    ) {
      alert("fill all the fields ");
      return;
    }

    const customerData: CustomerData = {
      fullname: fullname,
      phone: phone,
      dob: dob,
    };

    set(ref(database, "Customer/" + userName), customerData);
  };

  let selectData = () => {
    const dbref = ref(database);
    get(child(dbref, "Customer/" + userName))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val() as CustomerData;
          setFullname(data.fullname);
          setPhone(data.phone);
          setDob(data.dob);
        } else {
          alert("no data available");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error data");
      });
  };

  return (
    <>
      <label>Username</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />

      <label>Fullname</label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />
      <br />
      <label>phone</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />

      <label>date of birth</label>
      <input
        type="text"
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
        }}
      />
      <br />

      <button onClick={InsertData}>insert</button>
      <button>update</button>
      <button>delete</button>
      <button onClick={selectData}>select</button>
    </>
  );
}

// import FirebaseConfig from "../FirebaseConfig/firebaseConfig";
// import { ref, set, get, update, remove, child } from "firebase/database";
// import { useState } from "react";
// import "./firebasecrud.css";

// const database = FirebaseConfig();

// export default function FirebaseCrud() {
//   const [userName, setUsername] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [phone, setPhone] = useState("");
//   const [dob, setDob] = useState("");

//   const isNullWhiteSpacer = (value: String) => {
//     value = value.toString();
//     return value === null || value.replaceAll(" ", "").length < 1;
//   };

//   const InsertData = () => {
//     if (
//       isNullWhiteSpacer(userName) ||
//       isNullWhiteSpacer(fullname) ||
//       isNullWhiteSpacer(phone) ||
//       isNullWhiteSpacer(dob)
//     ) {
//       alert("fill all the fields ");
//       return;
//     }
//     set(ref(database, "Customer/" + userName), {
//       fullname: fullname,
//       phone: phone,
//       dob: dob,
//     });
//   };

//   let selectData = () => {
//     const dbref = ref(database);
//     get(child(dbref, "Customer/" + userName))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           setFullname(snapshot.val().fullname);
//           setPhone(snapshot.val().phone);
//           setDob(snapshot.val().dob);
//         } else {
//           alert("no data available");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("error data");
//       });
//   };

//   return (
//     <>
//       <label>Username</label>
//       <input
//         type="text"
//         value={userName}
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <br />

//       <label>Fullname</label>
//       <input
//         type="text"
//         value={fullname}
//         onChange={(e) => {
//           setFullname(e.target.value);
//         }}
//       />
//       <br />
//       <label>phone</label>
//       <input
//         type="text"
//         value={phone}
//         onChange={(e) => {
//           setPhone(e.target.value);
//         }}
//       />
//       <br />

//       <label>date of birth</label>
//       <input
//         type="text"
//         value={dob}
//         onChange={(e) => {
//           setDob(e.target.value);
//         }}
//       />
//       <br />

//       <button onClick={InsertData}>insert </button>
//       <button>update </button>
//       <button>delete</button>
//       <button onClick={selectData}>select</button>
//     </>
//   );
// }
