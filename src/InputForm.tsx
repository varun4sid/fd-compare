import { useContext } from "react";
import Amount from "./components/Amount";
import Tenure from "./components/Tenure";
import { UserInputContext } from "./AppContext";
import type { UserInputContextType } from "./AppContext";

function InputForm() {
    const { amount, setAmount, tenure, setTenure } = useContext(
        UserInputContext
    ) as UserInputContextType;

    return (
        <div className="flex gap-4 justify-center">
            <Amount amount={amount} setAmount={setAmount} />
            <Tenure tenure={tenure} setTenure={setTenure} />
        </div>
    );
}

export default InputForm;
