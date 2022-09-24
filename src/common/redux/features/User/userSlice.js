import {
    fetchUser,
    fetchUserByEmail,
    fetchUserByPhone,
    updateUserByCode,
    updateUserByPhone,
    updateUserEmailByCode,
    updateUserPassCv1ByCode,
    updateUserPassCv2ByCode,
    updateUserPhoneByCode,
} from "./userThunks";

const { createSlice, isAnyOf } = require("@reduxjs/toolkit");

let isPhone = true;
let isSend = true;
let isCheckCode = true;

const userSlice = createSlice({
    name: "isLoginUser",
    initialState: {
        user: {
            codeUser: "",
            fullName: "",
            userName: "",
            passWord: "",
            address: [{
                    code: "1",
                    name: "Hà Minh Quang",
                    phone: "0983641500",
                    phone2: "0983641500",
                    email: "quangskt1611@gmail.com",
                    city: "Buon Ma Thuot",
                    province: "Dak Lak",
                    district: "Phuong Tan An",
                    numberHouse: 102
                },
                {
                    code: "2",
                    name: "Lê Việt Hoàn",
                    phone: "0983641500",
                    phone2: "0983641500",
                    email: "leviethoan@gmail.com",
                    city: "Buon Ma Thuot",
                    province: "Dak Lak",
                    district: "Phuong Tan An",
                    numberHouse: 59
                }
            ],
            status: "",
            phone: null,
        },
        users: [],
        isCheck: {
            isSendCode: false,
            isInfo: false,
            isPhoneLogin: false,
            isCheckCode: false,
        },
        error: null,
        mess: null,
        phoneSave: null,
        loading: false,
        pagesCount: 0,
        isUpdate: false,
        totalElements: 0,
    },
    reducers: {
        setUser: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        },
        loginUser: (state, action) => {
            /** Check Phone User Database **/
            if (isPhone) {
                if (isSend) {
                    state = {
                        ...state,
                        user: {
                            ...state.user,
                            phone: action.payload.phone,
                        },
                        isCheck: {
                            ...state.isCheck,
                            isPhoneLogin: true,
                            isSendCode: true,
                        },
                    };
                }
            }
            return state;
        },
        sendCode: (state, action) => {
            /** Check Phone User Login **/
            if (action.payload.code) {
                if (isCheckCode) {
                    state = {
                        ...state,
                        isCheck: {
                            ...state.isCheck,
                            isCheckCode: true,
                        },
                    };
                }
            }
            console.log(state);
            return state;
        },
        updateUser: (state, action) => {
            if (action.payload.valueUser) {}
        },
        confirmRegUser: (state, action) => {
            if (action.payload.valueUser) {
                console.log(action.payload.valueUser);
                state = {
                    ...state,
                    isSendCode: false,
                    isInfo: false,
                    isPhoneLogin: false,
                    isCheckCode: false,
                    phoneSave: null,
                };
            }
            return state;
        },
    },
    extraReducers: (builder) => {
        /** Fetch User Redux Thunk */
        builder.addCase(fetchUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error";
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload.users;
            state.pagesCount = action.payload.pagesCount;
            state.totalElements = action.payload.totalElements;
        });

        /**Fetch User By Phone */
        builder.addCase(fetchUserByPhone.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUserByPhone.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error";
        });
        builder.addCase(fetchUserByPhone.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.pagesCount = action.payload.pagesCount;
            state.totalElements = action.payload.totalElements;
        });

        /** Fetch User By Email */
        builder.addCase(fetchUserByEmail.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchUserByEmail.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error";
        });
        builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.pagesCount = action.payload.pagesCount;
            state.totalElements = action.payload.totalElements;
        });

        /**Update user By Phone */
        builder.addCase(updateUserByPhone.pending, (state, action) => {
            console.log("DANG LOADING");
            state.loading = true;
        });
        builder.addCase(updateUserByPhone.rejected, (state, action) => {
            console.log("Error", action.error);
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(updateUserByPhone.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.pagesCount = action.payload.pagesCount;
            state.totalElements = action.payload.totalElements;
        });

        /** Update User Phone by Code */
        builder.addCase(updateUserPhoneByCode.pending, (state) => {
            state.loading = true
        })
        builder.addCase(updateUserPhoneByCode.rejected, (state, action) => {
            state.loading = false
            state.error = action.error
        })
        builder.addCase(updateUserPhoneByCode.fulfilled, (state, action) => {
            state.loading = false
            state.mess = action.payload.data
        })


        /** Update User By Code */
        builder.addCase(updateUserByCode.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUserByCode.rejected, (state) => {
            state.loading = false;
            state.isUpdate = false;
        })
        builder.addCase(updateUserByCode.fulfilled, (state, action) => {
            state.isCheck = false
            state.loading = false;
        })

        /** Update User Email by Code **/
        builder.addCase(updateUserEmailByCode.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUserEmailByCode.rejected, (state, action) => {
            state.mess = action.error
            state.loading = false;
        })
        builder.addCase(updateUserEmailByCode.fulfilled, (state, action) => {
            state.isUpdate = action.payload.data
            state.loading = false;
        })


        /** Update User Password level 1 by code **/
        builder.addCase(updateUserPassCv1ByCode.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUserPassCv1ByCode.rejected, (state, action) => {
            state.loading = false;
            state.mess = action.error
        })
        builder.addCase(updateUserPassCv1ByCode.fulfilled, (state, action) => {
            state.loading = false;
            state.mess = action.payload.data
        })

        /** Update User Password level 2 by code **/
        builder.addCase(updateUserPassCv2ByCode.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUserPassCv2ByCode.rejected, (state, action) => {
            state.loading = false;
            state.mess = action.error
        })
        builder.addCase(updateUserPassCv2ByCode.fulfilled, (state, action) => {
            state.loading = false;
            state.mess = action.payload.data
        })
    },
});

export const { setUser, loginUser, sendCode, confirmRegUser } =
userSlice.actions;
export default userSlice.reducer;