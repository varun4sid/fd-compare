export interface Scheme {
    id: number;
    bank: string;
    min_deposit: number;
    max_interest: number;
    instant_booking: boolean;
    account_required: boolean;
    dicgc_insurance: boolean;
}

const schemes: Array<Scheme> = [
    {
        id: 1,
        bank: "SBI",
        min_deposit: 1000,
        max_interest: 6.8,
        instant_booking: true,
        account_required: false,
        dicgc_insurance: true,
    },
    {
        id: 2,
        bank: "Suryoday",
        min_deposit: 1000,
        max_interest: 8.2,
        instant_booking: true,
        account_required: false,
        dicgc_insurance: true,
    },
    {
        id: 3,
        bank: "Slice",
        min_deposit: 1000,
        max_interest: 8.25,
        instant_booking: true,
        account_required: false,
        dicgc_insurance: true,
    },
];

export default schemes;
