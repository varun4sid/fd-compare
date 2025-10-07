export interface Scheme {
    id: number;
    bank: string;
    min_deposit: number;
    max_interest: number;
    max_tenure: number;
    instant_booking: boolean;
    account_required: boolean;
    dicgc_insurance: boolean;
}

const schemes: Array<Scheme> = [
    {
        id: 1,
        bank: "Suryoday",
        min_deposit: 1000,
        max_interest: 8.05,
        max_tenure: 5,
        instant_booking: true,
        account_required: false,
        dicgc_insurance: true,
    },
    {
        id: 2,
        bank: "Utkarsh",
        min_deposit: 1000,
        max_interest: 7.65,
        max_tenure: 2,
        instant_booking: true,
        account_required: false,
        dicgc_insurance: true,
    },
    {
        id: 3,
        bank: "Slice",
        min_deposit: 1000,
        max_interest: 7.5,
        max_tenure: 2.5,
        instant_booking: true,
        account_required: false,
        dicgc_insurance: true,
    },
];

export default schemes;
