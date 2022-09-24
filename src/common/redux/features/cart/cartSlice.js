
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cartProducts: [
      {
        codeShop: "SHOP12471761274",
        nameShop: "Lẩu cay trùng khánh ",
        imageShop: "",
        cartProducts: [
          {
            code: "PD228124812",
            codeShop: "SH14751WLAW",
            nameShop: "Cửa hàng lẩu trùng khánh ",
            info: "",
            image:
              "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
            nameProduct: "Lẩu trùng khánh cay nhẹ ",
            price: 146000,
            discount: 23,
            quality: 23,
          },
          {
            code: "PD48124612",
            codeShop: "SH14751WLAW", nameShop: "Cửa hàng lẩu trùng khánh ",
            info: "",
            image:
              "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
            nameProduct: "Lẩu trùng khánh cay nhẹ ",
            price: 146000,
            discount: 23,
            quality: 23,
          },
        ],
      },
      {
        codeShop: "SHOP12128611741",
        nameShop: "Lẩu cay trùng khánh ",
        imageShop: "",
        cartProducts: [
          {
            code: "PD961741",
            codeShop: "SH14751WLAW",
            nameShop: "Cửa hàng lẩu trùng khánh ",
            info: "",
            image:
              "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
            nameProduct: "Lẩu trùng khánh cay nhẹ ",
            price: 146000,
            discount: 23,
            quality: 23,
          },
          {
            code: "PD1614812",
            codeShop: "SH14751WLAW",
            nameShop: "Cửa hàng lẩu trùng khánh ",
            info: "",
            image:
              "https://salt.tikicdn.com/cache/w78/ts/product/66/68/47/10c4405af274b68983c13cc6f03281fb.jpg.webp",
            nameProduct: "Lẩu trùng khánh cay nhẹ ",
            price: 146000,
            discount: 23,
            quality: 23,
          },
        ],
      },
    ],
    productsGroup: [],
  },
  reducers: {
    onChaneCartProduct: (state, action) => {
      let currentCartProuducts = [...state.cartProducts]
      if (action.payload.typeAction === 'quality') {
        currentCartProuducts.map(item => {
          if (item.codeShop === action.payload.codeShop) {
            item.cartProducts.map(itemCart => {
              if (itemCart.code === action.payload.codeProduct) {
                if (action.payload.value > 0) {
                  itemCart.quality = action.payload.value
                }
              }
            })
          }
        })
        state.cartProducts = currentCartProuducts
      }
      return state;
    },
  },
});
export const { onChaneCartProduct } = cartSlice.actions;
export default cartSlice.reducer;
