import schemes from "../db";

interface BankSelectProps {
    scheme: string;
    setScheme: (val: string) => void;
}

function BankSelect(props: BankSelectProps) {
    function handleChangeScheme(e: React.ChangeEvent<HTMLSelectElement>) {
        props.setScheme(e.target.value);
    }

    return (
        <div className="p-2 gap-2">
            <label className=""></label>
            <select value={props.scheme} onChange={handleChangeScheme}>
                <option value="" disabled>
                    Select
                </option>
                {schemes.map((scheme) => (
                    <option key={scheme.id} value={scheme.id.toString()}>
                        {scheme.bank}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default BankSelect;
