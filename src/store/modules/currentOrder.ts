import axios from 'axios'
import {CURRENT_ORDER} from "../../api/currentOrder";

const state =  {
    "messages": [],
    "validation": [],
    "currency": {
        "current": "czk",
        "priceFormats": {
            "orderTotal": "999,00&nbsp;<span class=\"currency\">Kč</span>"
        },
        "default": "czk",
        "available": {
            "czk": {
                "code": "czk",
                "name": "Kč"
            }
        },
        "priceLevel": "_default"
    },
    "items": [
        {
        "count": 1
        }
    ],
    "delivery": null,
    "payment": null,
    "discounts": [],
    "credit": [],
    "totals": {
        "noImage": "/data/storage/thumbs/62x62-scaleexpand/no-picture.jpg",
        "itemsPriceWithoutVATFormatted": "123&nbsp;966,94&nbsp;<span class=\"currency\">Kč</span>",
        "itemsPriceWithVATFormatted": "150&nbsp;000,00&nbsp;<span class=\"currency\">Kč</span>",
        "itemsPriceWithoutVAT": 123966.94,
        "itemsPriceWithVAT": 150000,
        "summaryLines": []
    },
    "customer": {
        "note": "",
        "isLoggedIn": false,
        "canCustomerRegisterOnCheckout": true,
        "shouldRegisterCustomerOnCheckout": false,
        "passwordForRegisterCustomerOnCheckoutIsFilled": false,
        "agreedToOrderReviewNotification": false,
        "refusedHeurekaReviewNotification": false,
        "applyReverseCharge": false,
        "billingEmail": "",
        "billingFirstName": "",
        "billingLastName": "",
        "billingAddress": "",
        "billingCity": "",
        "billingPostalCode": "",
        "billingCountry": "",
        "billingPhone": "",
        "billingCompany": "",
        "billingCompany_id": "",
        "billingCompany_vatId": "",
        "shippingFirstName": "",
        "shippingLastName": "",
        "shippingAddress": "",
        "shippingCity": "",
        "shippingPostalCode": "",
        "shippingCountry": "",
        "shippingPhone": "",
        "shippingCompany": ""
    },
    "freeDelivery": {
        "available": true,
        "requiredItemsPriceWithVAT": 1500,
        "message": ""
    },
    "volumeDiscount": []
}

const getters = {
}

const mutations = {
    setItems: (state: any, payload: any) => state.items = payload,
    setSummaryLines: (state: any, payload: any) => state.totals.summaryLines = payload,
    increaseCount: (state: any, payload: any) => {
        const itemID = state.items.find((item: any) => item.id === payload.id)
        if (itemID) {
        itemID.count++
        return
        }
    },
    decreaseCount: (state: any, payload: any) => {
        const itemID = state.items.find((item: any) => item.id === payload.id)
        if (itemID && itemID.count > 1) {
        itemID.count--
        return
        }
    },
    deleteItem: (state: any, payload: any) => {
        const filteredItems = state.items.filter((item:any) => item.id !== payload)
        state.items = filteredItems
    }
} 

const actions = {
    async getItems({commit}: any) {
        try {
            // const {data} = await axios.get("http://clevero.cz.dev.poski.loc/order/current/")
            const data = CURRENT_ORDER
            commit("setItems", data.items)
            commit("setSummaryLines", data.totals.summaryLines)
        } catch (e) {
            console.log(e)
        }
    }
}


export default {
    state,
    getters,
    actions,
    mutations
};