import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectCommentIsCommentReplay } from "../../../../redux/features/comment/commentSelects";
import { addComment, isCommentReplay } from "../../../../redux/features/comment/commentSlice";

export default function CommentSendReplay() {
  const dataIsCommentReplay = useSelector(selectCommentIsCommentReplay)
  const dispatch = useDispatch()
  const [textComment, setTextComment] = useState({
    code: null,
    text: null
  })
  const onCommentReplay = (e) => {
    e.preventDefault();
    const activeComment = {
      code: null,
      isActive: false
    }
    const user = {
      name: "Lẩu bồ Hà Duyên",
      avatar: 'https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg',
    }
    if (textComment.code && textComment.text) {
      const comment = {
        user,
        data: textComment
      }
      let isComment = confirm("Bạn xác nhận bình luận với nội dung này ");
      if (isComment) {
        dispatch(isCommentReplay(activeComment))
        dispatch(addComment({ comment }))
      }
      else {
        dispatch(isCommentReplay(activeComment))

      }
    }
  }
  return (
    <>
      <div className="repComment__avatar">
        <picture>
          <img
            src="https://loanthehongnhan.vn/hinh-anh-anime-doi/imager_29338.jpg"
            alt=""
          />
        </picture>
      </div>
      <div className="repComment__content">
        <div className="title">
          Lẩu bồ Hà Duyên
          <i className="fa-solid fa-circle-check fa-size" />
        </div>
        <form onSubmit={onCommentReplay} action="http://localhost:8080/">
          <div className="text">
            <textarea
              className="text__comment"
              name="text"
              id=""
              onChange={(e) => setTextComment({
                code: dataIsCommentReplay.codeComment,
                text: e.target.value
              })}
              defaultValue={""}
            />
          </div>
          <button className="btnRep" type="submit">
            <i className="fa-solid fa-paper-plane" /> Phản
            hồi
          </button>
        </form>
      </div>
    </>
  )
}
