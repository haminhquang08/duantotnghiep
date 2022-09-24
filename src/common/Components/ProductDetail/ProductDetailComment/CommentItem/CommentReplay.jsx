import { useState } from "react"
import { useDispatch } from "react-redux"
import { removeComment } from "../../../../redux/features/comment/commentSlice"

export default function CommentReplay({ codeCommentReplay, codeComment, codeShop, user, textComment, dateComment, like, isCheck }) {
  const dispatch = useDispatch()
  const [dataUser] = useState({
    codeUser: '#14769018FJKWI12474',
    codeShop: 'SHOP4781674917W'
  })
  const onRemoveComment = (codeComment, codeCommentReplay, codeShop) => {
    if (codeComment && codeCommentReplay && codeShop) {
      const valueRemove = {
        codeComment,
        codeCommentReplay,
        codeShop,
        dataUser
      }
      let isRemove = confirm("Bạn có chắc chắn muốn xóa comment này ");
      if (isRemove) {
        dispatch(removeComment({ valueRemove }))
      }

    }
  }
  return (
    <div className="repComment">
      <div className="repComment__avatar">
        <picture>
          <img
            src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg"
            alt=""
          />
        </picture>
      </div>
      <div className="repComment__content">
        <div className="title">
          {user.name}
          <i className="fa-solid fa-circle-check fa-size" />
          <b>{dateComment}</b>
        </div>
        <div className="text">
          <p>
            {textComment}
          </p>
        </div>
        {
          dataUser && dataUser.codeShop === codeShop ?
            <div className="remove">
              <i onClick={() => onRemoveComment(codeComment, codeCommentReplay, codeShop)} class="fa-regular fa-trash-can fa-size"></i>
            </div>
            : ''
        }
      </div>
    </div>
  )
}
