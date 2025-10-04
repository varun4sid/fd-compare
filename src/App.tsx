import { useState } from "react";
import "./App.css";
import InputForm from "./InputForm";
import Table from "./components/Table";
import { UserInputContext } from "./AppContext";

function App() {
    const [amount, setAmount] = useState<number>(100000);
    const [tenure, setTenure] = useState<number>(2);

    return (
        <UserInputContext value={{ amount, setAmount, tenure, setTenure }}>
            <h1 className="font-bold">Compare FDs</h1>
            <h2 className="text-xl">among the best in class</h2>
            <br />
            <InputForm />
            <br />
            <div className="flex justify-center items-center">
                <Table />
            </div>
        </UserInputContext>
    );
}

export default App;
