import Image from "next/image";
import styles from "./page.module.css";
import Greetings from "./greetings";
import App from "./app";
import Counter from "./counter";
import ProductList from "./product_list";

export default function Home() {
  return (
    <>
    <Greetings nombre="Antonio"/>
    <Counter/>
    <ProductList/>
    <App/>
    </>
  );
}
