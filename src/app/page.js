
import Image from "next/image";
import styles from "./page.module.css";
import Greetings from "./greetings";
import App from "./app";
import Counter from "./counter";
import ProductList from "./product_list";
import Parent from "./Parent";
import Child from "./Child";
import ToggleSwitch from "./ToggleSwitch";
import ToDoList from "./ToDoList";
import Counter2 from "./Counter2";
import LoguinControl from "./LoguinControl";
import ProductStock from "./ProductStock";
import ContactForm from "./ContactForm";
import ShoppingList from "./ShoppingList";
import DropDown from "./DropDown";
import ImageGallery from "./ImageGallery";

export default function Home() {
  return (
    <>
    {/*<Greetings nombre="Antonio"/>
    <Counter/>
    <ProductList/>
    <App/>
    <Parent/>
    <ToggleSwitch/>
    <Counter2/>
    <LoguinControl/>
    <ProductStock inStock= {false}/>
    <ToDoList/>
    <ContactForm/>
    <ShoppingList list={[{id:1, nombre:"webos"},
                         {id:2, nombre:"zarchichas"},
                         {id:3, nombre:"sal"},
                         {id:4, nombre:"entra"},
                         {id:5, nombre:"pape de culo"}]}/>
    <DropDown list={[{id:1, nombre:"Opcion1"},
                         {id:2, nombre:"Opcion2"},
                         {id:3, nombre:"Opcion3"},
                         {id:4, nombre:"Opcion4"},
                         {id:5, nombre:"Opcion5"}]}/>*/}
    <ImageGallery/>
    </>
  );
}
