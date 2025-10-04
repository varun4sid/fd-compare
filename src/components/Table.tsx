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
                        <td className="left">{feature.label}</td>
                        {[scheme1, scheme2, scheme3].map((scheme, index) => {
                            const bank = schemes.find(
                                (s) => s.id.toString() === scheme
                            );
                            let value;
                            switch (feature.key) {
                                case "max_interest":
                                    value = bank?.min_deposit
                                        ? bank.min_deposit
                                        : "-";
                                    break;
                                case "maturity_amount":
                                    value = bank?.max_interest
                                        ? bank.max_interest
                                        : "-";
                                    break;
                                case "total_gains":
                                    value = bank
                                        ? (
                                              (bank.max_interest / 100) *
                                              amount *
                                              tenure
                                          ).toFixed(2)
                                        : "-";
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
                            return <td key={index}>{value}</td>;
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
