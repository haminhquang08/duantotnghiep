import { uuid } from "uuidv4";

const { createSlice } = require("@reduxjs/toolkit");

const commentSlice = createSlice({
  name: 'commentSlice',
  initialState: {
    comments: [
      {
        code: "CIWRY47107715785",
        codeProduct: 3,
        codeShop: 'SHOP4781674917W',
        user: {
          name: "Đậu Văn Nam ",
          avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg',
        },
        textComment: `The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database., The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database. The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database. The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.
                      The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database., The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database. The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database. The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.
        `,
        commentReplay: [
          {
            codeReplay: "C34746126464",
            user: {
              name: "Lẩu bồ Hà Duyên",
              avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg',
            },
            textComment: `Rep comment`,
            commentReplay: [],
            dateComment: " 2022-10-10 | 8:40:13",
            like: 48,
            isCheck: true

          },
          {
            codeReplay: "CIWRY745754",
            user: {
              name: "Lẩu bồ Hà Duyên",
              avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg',
            },
            textComment: `Rep comment 2`,
            commentReplay: [],
            dateComment: " 2022-10-20 | 16:40:13",
            like: 948,
            isCheck: true

          }

        ],
        commentImages: [
          {
            code: 'IMAGE24716070184',
            link: 'https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg'
          },
          {
            code: 'IMAGE24716075671',
            link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg'
          },
          {
            code: 'IMAGE2471607161',
            link: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
          }
        ],
        videos: null,
        rating: 4,
        dateComment: " 2022-10-20 | 16:40:13",
        like: 948,
        isCheck: false,

      },
      {
        code: "CIWRY4710774815",
        codeProduct: 3,
        codeShop: 'SHOP4781674917W',
        user: {
          name: "Lê văn bảo 4",
          avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg',
        },
        commentImages: [
          {
            code: 'IMAGE247160706718',
            link: 'https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg'
          },
          {
            code: '#IMAGE24716075671',
            link: 'https://image.shutterstock.com/image-photo/healthy-food-clean-eating-selection-260nw-722718082.jpg'
          },
        ],
        commentReplay: [],
        videos: [
          {
            code: 'VIDEO2148671490',
            link: ''
          }
        ],

        rating: 2,
        textComment: ` Hack  `,
        dateComment: " 2022-10-20 | 16:40:13",
        like: 248,
        isCheck: false

      },
      {
        code: "CIWRY471077112416",
        codeProduct: 71,
        codeShop: 'SHOP4781674917W',
        user: {
          name: "Lê văn bảo 9",
          avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg',
        },
        videos: null,
        commentImages: [],
        commentReplay: [],
        rating: 4,
        textComment: ` Hack  `,
        dateComment: " 2022-10-20 | 16:40:13",
        like: 248,
        isCheck: false,


      }
    ],
    error: null,
    isCommentReplay: {
      codeComment: null,
      isActive: false
    },
    loading: false
  },
  reducers: {
    isCommentReplay: (state, action) => {
      let currentIsCommentReplay = { ...state.isCommentReplay }
      if (currentIsCommentReplay) {
        currentIsCommentReplay.isActive = action.payload.isActive
        currentIsCommentReplay.codeComment = action.payload.code
      }
      state.isCommentReplay = currentIsCommentReplay;
      return state
    },
    addComment: (state, action) => {
      let currentComments = [...state.comments]
      const commentReplay = action.payload.comment
      if (currentComments) {
        let idxComment = currentComments.findIndex(curCom => curCom.code === commentReplay.data.code)
        if (idxComment !== -1) {
          const dataComment = {
            codeReplay: uuid(),
            user: commentReplay.user,
            textComment: commentReplay.data.text,
            dateComment: " 2022-10-10 | 8:40:13",
            like: 48,
            isCheck: true
          }
          currentComments[idxComment].commentReplay.unshift(dataComment)
          state.comments = currentComments;
        }
      }
      return state;
    },
    removeComment: (state, action) => {
      let currentComments = [...state.comments];
      const valueRemove = action.payload.valueRemove;
      if (valueRemove) {
        let idxComment = currentComments.findIndex(curCom => curCom.codeShop === valueRemove.codeShop && curCom.code === valueRemove.codeComment && curCom.codeShop === valueRemove.dataUser.codeShop)
        if (idxComment !== -1) {
          let newCurrentComments = currentComments[idxComment].commentReplay.filter(cmtRl => cmtRl.codeReplay !== valueRemove.codeCommentReplay)
          currentComments[idxComment].commentReplay = newCurrentComments;
          state.comments === currentComments;
        }
        else {
        }
      }
      return state;
    },
    sortComment: (state, action) => {
      let i, key, j;
      let currentComments = [...state.comments];
      if (currentComments) {
        if (action.payload.type === 'sortaz') {
          for (i = 1; i < currentComments.length; i++) {
            key = currentComments[i];
            j = i - 1;
            while (j >= 0 && currentComments[j].rating > key.rating) {
              currentComments[j + 1] = currentComments[j];
              j = j - 1;
            }
            currentComments[j + 1] = key;
          }
          state.comments = currentComments;
        }
        else if (action.payload.type === 'sortza') {

          for (i = 1; i < currentComments.length; i++) {
            key = currentComments[i];
            j = i - 1;
            while (j >= 0 && currentComments[j].rating < key.rating) {
              currentComments[j + 1] = currentComments[j];
              j = j - 1;
            }
            currentComments[j + 1] = key;
          }
          state.comments = currentComments;
        }
        else if (action.payload.type === 'sort5s') {
          for (i = 1; i < currentComments.length; i++) {
            key = currentComments[i];
            j = i - 1;
            while (j >= 0 && currentComments[j].rating < key.rating) {
              currentComments[j + 1] = currentComments[j];
              j = j - 1;
            }
            currentComments[j + 1] = key;
          }
          state.comments = currentComments;
        }
        else if (action.payload.type === 'sort4s') {
          i = 0;
          currentComments.sort((x, y) => 4 === x.rating ? -1 : x = y)
          state.comments = currentComments;
        }
        else if (action.payload.type === 'sort3s') {
          i = 0;
          currentComments.sort((x, y) => 3 === x.rating ? -1 : x = y)
          state.comments = currentComments;
        }
        else if (action.payload.type === 'sort2s') {
          i = 0;
          currentComments.sort((x, y) => 2 === x.rating ? -1 : x = y)
          state.comments = currentComments;
        }
        else if (action.payload.type === 'sort1s') {
          i = 0;
          currentComments.sort((x, y) => 1 === x.rating ? -1 : x = y)
          state.comments = currentComments;
        }
        else {

        }
      }
      return state;
    }
  }
})
export const { addComment, removeComment, sortComment, isCommentReplay } = commentSlice.actions
export default commentSlice.reducer;
