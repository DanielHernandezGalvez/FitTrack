import Image from "next/image";
import styles from "./page.module.css";
import FirebaseCrud from "./components/FirebaseCrud/FirebaseCrud";

export default function Home() {
  return (
    <>
      <FirebaseCrud />{" "}
    </>
  );
}
