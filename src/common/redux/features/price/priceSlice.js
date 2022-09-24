const { createSlice } = require("@reduxjs/toolkit");

const priceSlice = createSlice({
  name: "priceSlice",
  initialState: {
    dataPrice: {
      price: null,
      priceMonth: null,
      priceWeek: null,
      priceDay: null,
    },
    dataCard: {
      cardConnect: [],
      cardBlock: [],
    },
    dataGift: {
      giftCode: [],
      giftCodeCard: [],
      giftUSer: [],
    },
  },
  extraReducers: (builder) => {},
});
