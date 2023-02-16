import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Tracker from "./components/Tracker";
import Runcard from "./components/Runcard";
import Cyclecard from "./components/Cyclecard";
import Swimcard from "./components/Swimcard";
import Walkcard from "./components/Walkcard";
import Hikecard from "./components/Hikecard";
import Footer from "./components/Footer";
import { createContext } from "react";
import "./App.css";

export const GlobalContext = createContext();

function App() {
  const [input, setInput] = useState([]); //step2 state bnai. input aik variable hy or setInput aik function hy
  const [editId, setEditId] = useState("");
  const [btnState, setBtnState] = useState(true);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };
  // Data is fetching  API
  const submitData = async () => {
    //e bs aik variable hy jo k call hony pe parameter ata h vgra vgra
    // e.preventDefault();  //e.preventdefault page reload hony se rokta hy
    await fetch("http://localhost:4000/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input), //transfers data in string. input save krwana h
    }); //post backend wala
    runData();
    swimData();
    hikeData();
    walkData();
    cycleData();
    setInputEmpty();
  };

  //s14 form empty after adding data
  let empty = {
    name: "",
    description: "",
    exrcise: "",
    date: "",
    duration: "",
  };
  //s17
  const setInputEmpty = () => {
    setInput(empty);
  };
  //s18 or s19 runcard ka code hy
  //s19
  const [running, setRunning] = useState([]);
  const [swimming, setSwimming] = useState([]);
  const [hiking, setHiking] = useState([]);
  const [walking, setWalking] = useState([]);
  const [cycling, setCycling] = useState([]);

  //s18
  const runData = async () => {
    // const excercise= "Running"
    const dikhao = await fetch(`http://localhost:4000/read/${"Running"}`);
    let data = await dikhao.json();
    setRunning(data);
  };
  const swimData = async () => {
    // const excercise= "Running"
    const dikhao = await fetch(`http://localhost:4000/read/${"Swimming"}`);
    let data = await dikhao.json();
    setSwimming(data);
  };
  const hikeData = async () => {
    // const excercise= "Running"
    const dikhao = await fetch(`http://localhost:4000/read/${"Hiking"}`);
    let data = await dikhao.json();
    setHiking(data);
  };
  const walkData = async () => {
    // const excercise= "Running"
    const dikhao = await fetch(`http://localhost:4000/read/${"Walking"}`);
    let data = await dikhao.json();
    setWalking(data);
  };
  const cycleData = async () => {
    // const excercise= "Running"
    const dikhao = await fetch(`http://localhost:4000/read/${"Cycling"}`);
    let data = await dikhao.json();
    setCycling(data);
  };

  //delete ka function
  const deleteData = async (delId) => {
    //console.log("id deleted", delId);
    await fetch(`http://localhost:4000/del/${delId}`, {
      method: "DELETE", //sirf GET waly pe method ni lgta baki sb pe
    });
    runData();
    swimData();
    hikeData();
    walkData();
    cycleData();
  };

  //edit ka function
  const editData = async (abc) => {
    const krdoEdit = await fetch(`http://localhost:4000/edit/${abc}`);
    let jsonwla = await krdoEdit.json();
    setInput(jsonwla);
    setEditId(abc);
    setBtnState(false);
    console.log("eddd", jsonwla);
  };

  //update ka fun ction
  const updateData = async () => {
    //e bs aik variable hy jo k call hony pe parameter ata h vgra vgra
    // e.preventDefault();  //e.preventdefault page reload hony se rokta hy
    await fetch(`http://localhost:4000/update/${editId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input), //transfers data in string. input save krwana h
    }); //post backend wala
    setBtnState(true);
    runData();
    swimData();
    hikeData();
    walkData();
    cycleData();
    setInputEmpty();
  };

  useEffect(() => {
    runData();
    swimData();
    hikeData();
    walkData();
    cycleData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setInputEmpty,
        submitData,
        inputHandler,
        input,
        running,
        swimming,
        hiking,
        walking,
        cycling,
        deleteData,
        editData,
        updateData,
        btnState,
      }}
    >
      <Navbar />
      <Hero />
      <Section />
      {/* <Section2 /> */}
      <Tracker />
      <Runcard />
      <Cyclecard />
      <Swimcard />
      <Walkcard />
      <Hikecard />
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
