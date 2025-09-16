interface Amount {
    amount: number;
    setAmount: (val: number) => void;
}

function Amount({ amount, setAmount }: Amount) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
        console.log(`Amount : ${amount}`);
    };

    return (
        <fieldset className="mb-4 p-4 border-2 border-gray-700 rounded-lg flex-1 max-w-xs">
            <legend className="font-semibold  px-2">Amount</legend>
            <input
                type="number"
                id="amount"
                min={0}
                value={amount}
                onChange={handleChange}
                max={1000000000}
                step={1}
                className="mt-2 px-3 py-2 border-2 border-gray-700 rounded w-full"
            />
        </fieldset>
    );
}

export default Amount;
