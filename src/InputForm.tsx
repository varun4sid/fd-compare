import Amount from "./components/Amount";
import Tenure from "./components/Tenure";

export interface UserInput {
    amount: number;
    setAmount: (val: number) => void;
    tenure: number;
    setTenure: (val: number) => void;
}

function InputForm({ userInput }: { userInput: UserInput }) {
    const { amount, setAmount, tenure, setTenure } = userInput;

    return (
        <div className="flex gap-4 justify-center">
            <Amount amount={amount} setAmount={setAmount} />
            <Tenure tenure={tenure} setTenure={setTenure} />
        </div>
    );
}

export default InputForm;
