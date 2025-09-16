interface Tenure {
    tenure: number;
    setTenure: (val: number) => void;
}

function Tenure({ tenure, setTenure }: Tenure) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTenure(Number(e.target.value));
        console.log(`Tenure : ${tenure}`);
    };

    return (
        <fieldset className="mb-4 p-4 border-2 border-gray-700 rounded-lg flex-1 max-w-xs">
            <legend className="font-semibold px-2">Tenure</legend>
            <input
                type="number"
                id="tenure"
                value={tenure}
                onChange={handleChange}
                min={1}
                max={10}
                step={1}
                className="mt-2 px-3 py-2 border-2 border-gray-700 rounded w-full"
            />
        </fieldset>
    );
}

export default Tenure;
