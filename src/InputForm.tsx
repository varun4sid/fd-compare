import { useState } from "react";
import Amount from "./components/Amount";
import Tenure from "./components/Tenure";

function InputForm() {
    const [amount, setAmount] = useState<number>(100000);
    const [tenure, setTenure] = useState<number>(2);

    return (
        <div className="flex gap-4 justify-center">
            <Amount amount={amount} setAmount={setAmount} />
            <Tenure tenure={tenure} setTenure={setTenure} />
        </div>
    );
}

export default InputForm;
