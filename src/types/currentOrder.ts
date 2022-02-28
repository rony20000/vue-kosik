interface Item {
    id: string,
    type: number,
    titlePrefix: string,
    title: string,
    variant: string,
    text: string[],
    image: string,
    url: string,
    count: number,
    maxCount: number,
    totalPriceWithoutVATFormatted: string,
    totalPriceWithVATFormatted: string,
    unit: string,
    editable: boolean,
    deletable: null,
    orderReturnUrl: null,
    showPrice: true,
    showCount: boolean
}

interface SummaryLine {
    type: string,
    text: string,
    priceFormatted: string
}

interface CurrentOrder {
    messages: any[],
    validation: any[],
    currency: {
        current: string,
        priceFormats: {
            orderTotal: string
        },
        default: string,
        available: {
            czk: {
                code: string,
                name: string
            }
        },
        priceLevel: string
    },
    items: Item[],
    delivery: null,
    payment: null,
    discounts: any[],
    credit: any[],
    totals: {
        noImage: string,
        itemsPriceWithoutVATFormatted: string,
        itemsPriceWithVATFormatted: string,
        itemsPriceWithoutVAT: number,
        itemsPriceWithVAT: number,
        summaryLines: SummaryLine[]
    },
    customer: {
        note: string,
        isLoggedIn: boolean,
        canCustomerRegisterOnCheckout: boolean,
        shouldRegisterCustomerOnCheckout: boolean,
        passwordForRegisterCustomerOnCheckoutIsFilled: boolean,
        agreedToOrderReviewNotification: boolean,
        refusedHeurekaReviewNotification: boolean,
        applyReverseCharge: boolean,        illingEmail: string,
        billingFirstName: string,
        billingLastName: string,
        billingAddress: string,
        billingCity: string,
        billingPostalCode: string,
        billingCountry: string,
        billingPhone: string,
        billingCompany: string,
        billingCompany_id: string,
        billingCompany_vatId: string,
        shippingFirstName: string,
        shippingLastName: string,
        shippingAddress: string,
        shippingCity: string,
        shippingPostalCode: string,
        shippingCountry: string,
        shippingPhone: string,
        shippingCompany: string
    },
    freeDelivery: {
        available: boolean,
        requiredItemsPriceWithVAT: number,
        message: string
    },
    volumeDiscount: any[]
}