import React, { useState } from "react";
import "./../styles/App.css";

function App() {

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [answer, setAnswer] = useState("");

  const calculate = () => {

    if (name1.trim() === "" || name2.trim() === "") {
      setAnswer("Please Enter valid input");
      return;
    }

    let a = name1.split("");
    let b = name2.split("");

    for (let i = 0; i < a.length; i++) {
      const index = b.indexOf(a[i]);
      if (index !== -1) {
        a[i] = "";
        b[index] = "";
      }
    }

    const count = a.join("").length + b.join("").length;
    const mod = count % 6;

    const flames = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings"
    };

    setAnswer(flames[mod]);
  };

  const clear = () => {
    setName1("");
    setName2("");
    setAnswer("");
  };

  return (
    <div id="main">

      <input
        data-testid="input1"
        name="name1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />

      <input
        data-testid="input2"
        name="name2"
        placeholder="Enter second name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />

      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={calculate}
      >
        Calculate Relationship Future
      </button>

      <button
        data-testid="clear"
        name="clear"
        onClick={clear}
      >
        Clear
      </button>

      <h3 data-testid="answer">{answer}</h3>

    </div>
  );
}

export default App;