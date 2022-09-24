export const RouterLinkConfig = {
    //* Index Web
    //*
    index: "/",

    //* Not Found Web **/
    notFound: '/not-found',
    //* Show Product Detail
    //*
    productDetailL: (nameProduct, codeProduct) => {
        return `/product/${nameProduct}.${codeProduct}`;
    },

    /** Search Product User */
    search: (value) => {
        return `/search/${value}`;
    },
    //** Cart */
    cart: "/cart",
    //* Detail Shop
    //*
    shopIndex: (nameShop) => {
        return `/shop/${nameShop}?tow=shop`;
    },
    shopAllProduct: (nameShop) => {
        return `/shop/${nameShop}?tow=product`;
    },
    shopCategory: (nameShop) => {
        return `/shop/${nameShop}?tow=category`;
    },
    shopInfo: (nameShop) => {
        return `/shop/${nameShop}?tow=info`;
    },

    /* User */

    userInfo: () => {
        return "/user/info";
    },

    userShop: () => {
        return "/user/shop";
    },

    userPrice: () => {
        return "/user/price";
    },

    userOrder: () => {
        return "/user/order";
    },
    userOrderDetail: (value) => {
        return `/user/order/detail/${value}`;
    },

    userPay: () => {
        return "/user/pay";
    },

    userPayDetail: (value) => {
        return `/user/pay/detail/${value}`;
    },

    userNotify: () => {
        return "/user/notify";
    },

    userPrice: () => {
        return "/user/price";
    },
    userNotifyDetail: (value) => {
        return `/user/notify/detail/${value}`;
    },

    userAddress: () => {
        return "/user/address";
    },

    userAddressDetail: (value) => {
        return `/user/address/detail/${value}`;
    },

    userSecurity: () => {
        return `/user/security`;
    },
    userSecuritySetting: () => {
        return `/user/security/setting`;
    },

    /** URL API */
};