import Image from "next/image";
import styles from "./page.module.css";
import Greetings from "./greetings";
import App from "./app";

export default function Home() {
  return (
    <>
    <Greetings nombre="Antonio"/>
    <App/>
    </>
  );
}
