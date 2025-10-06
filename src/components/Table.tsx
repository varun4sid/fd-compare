import { useState, useContext } from "react";
import BankSelect from "./BankSelect";
import schemes from "../db";
import { UserInputContext, type UserInputContextType } from "../AppContext";
import TickIcon from "./TickIcon";
import CrossIcon from "./CrossIcon";

interface Feature {
    key: string;
    label: string;
}

const features: Feature[] = [
    { key: "min_deposit", label: "Min Deposit" },
    { key: "max_interest", label: "Max Interest" },
    { key: "maturity_amount", label: "Maturity Amount" },
    { key: "total_gains", label: "Total Gains" },
    { key: "instant_booking", label: "Instant Booking" },
    { key: "account_required", label: "Account Required" },
    { key: "dicgc_insurance", label: "DICGC Insurance" },
];

function Table() {
    const [scheme1, setScheme1] = useState("");
    const [scheme2, setScheme2] = useState("");
    const [scheme3, setScheme3] = useState("");

    const { amount, tenure } = useContext(
        UserInputContext
    ) as UserInputContextType;

    return (
        <table className="margin-auto border-collapse">
            <thead>
                <tr>
                    <th>Features</th>
                    <th>
                        <BankSelect scheme={scheme1} setScheme={setScheme1} />
                    </th>
                    <th>
                        <BankSelect scheme={scheme2} setScheme={setScheme2} />
                    </th>
                    <th>
                        <BankSelect scheme={scheme3} setScheme={setScheme3} />
                    </th>
                </tr>
            </thead>
            <tbody>
                {features.map((feature) => (
                    <tr key={feature.key}>
                        <td className="left font-bold">{feature.label}</td>
                        {[scheme1, scheme2, scheme3].map((scheme, index) => {
                            const bank = schemes.find(
                                (s) => s.id.toString() === scheme
                            );
                            let value;
                            let styles;
                            switch (feature.key) {
                                case "min_deposit":
                                    value = bank?.min_deposit
                                        ? String("₹ " + bank.min_deposit)
                                        : "-";
                                    break;
                                case "max_interest":
                                    value = bank?.max_interest
                                        ? bank.max_interest + "%"
                                        : "-";
                                    break;
                                case "maturity_amount":
                                    if (bank) {
                                        const principal = amount;
                                        const rate = bank.max_interest;
                                        const n = 4; // quarterly
                                        const t = tenure;
                                        const maturity =
                                            principal *
                                            Math.pow(
                                                1 + rate / (100 * n),
                                                n * t
                                            );
                                        value = maturity.toFixed(2);
                                    } else {
                                        value = "-";
                                    }
                                    break;
                                case "total_gains":
                                    if (bank) {
                                        const principal = amount;
                                        const rate = bank.max_interest;
                                        const n = 4; // quarterly
                                        const t = tenure;
                                        const maturity =
                                            principal *
                                            Math.pow(
                                                1 + rate / (100 * n),
                                                n * t
                                            );
                                        value = (maturity - principal).toFixed(
                                            2
                                        );
                                        value = "+ ₹" + value;
                                        styles = "text-green-600 font-semibold";
                                    } else {
                                        value = "-";
                                    }
                                    break;
                                case "instant_booking":
                                    value = !scheme ? (
                                        "-"
                                    ) : bank?.instant_booking ? (
                                        <TickIcon />
                                    ) : (
                                        <CrossIcon />
                                    );
                                    break;
                                case "account_required":
                                    value = !scheme ? (
                                        "-"
                                    ) : bank?.account_required ? (
                                        <TickIcon />
                                    ) : (
                                        <CrossIcon />
                                    );
                                    break;
                                case "dicgc_insurance":
                                    value = !scheme ? (
                                        "-"
                                    ) : bank?.dicgc_insurance ? (
                                        <TickIcon />
                                    ) : (
                                        <CrossIcon />
                                    );
                                    break;
                            }
                            return (
                                <td key={index} className={styles}>
                                    {value}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
