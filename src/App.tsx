import { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import Table from "./components/Table";

function App() {
    const [amount, setAmount] = useState<number>(100000);
    const [tenure, setTenure] = useState<number>(2);

    const userInput = {
        amount,
        setAmount,
        tenure,
        setTenure,
    };

    return (
        <>
            <h1 className="font-bold">Compare FDs</h1>
            <h2 className="text-xl">among the best in class</h2>
            <br />
            <InputForm userInput={userInput} />
            <br />
            <Table />
        </>
    );
}

export default App;
