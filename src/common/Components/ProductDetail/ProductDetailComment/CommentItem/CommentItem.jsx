import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBackground } from "../../../../redux/features/backgroundFixed/backgroundFixedSlice";
import { selectCommentIsCommentReplay } from "../../../../redux/features/comment/commentSelects";
import { isCommentReplay } from "../../../../redux/features/comment/commentSlice";
import BackgroundFixed from "../../../BackgroundFixed/BackgroundFixed";
import CommentReplay from "./CommentReplay";
import CommentSendReplay from "./CommentSendReplay";

export default function CommentItem({ code, codeShop, avatar, name, dateComment, commentReplay, like, rating, isCheck, textComment, images, videos }) {
  const dispatch = useDispatch()
  const dataIsCommentReplay = useSelector(selectCommentIsCommentReplay)
  const activeCommentReplay = (code, isActive) => {
    const activeComment = {
      code,
      isActive
    }
    dispatch(isCommentReplay(activeComment))
  }
  const ratingComment = (sizeRating) => {
    let resultRating = []
    for (let i = 0; i < sizeRating; i++) {
      resultRating.push(<i className="fa-solid fa-star fa-size" />)
    }
    for (let j = resultRating.length; j < 5; j++) {
      resultRating.push(<i className="fa-solid fa-star fa-size not-active" />)
    }
    return resultRating;
  }
  const onShowBackgroundFixed = (image, code, type) => {
    const valueBackground = {
      code,
      image,
      isActice: true,
      type,
    }
    dispatch(addBackground({ valueBackground }))
  }
  return (
    <>

      <div className="evaluate__point___user">
        <div className="left comment">
          <div className="content">
            <div className="avatar">
              <picture>
                <img
                  src={avatar}
                  alt=""
                />
              </picture>
            </div>
            <div className="name">
              <h3 className="w">{name}</h3>
              <div className="star">
                {
                  ratingComment(rating).map(item => {
                    return (item)
                  })
                }

              </div>
              <div className="date">
                <span>
                  <i className="fa-solid fa-clock" />
                  {dateComment}
                </span>
              </div>
              <div className="like">
                <i className="fa-solid fa-thumbs-up fa-size" />
                <b>{like}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <span>Hài lòng </span>
            <div className="check">
              {
                isCheck ? <>
                  <i className="fa-solid fa-circle-check fa-size" />
                  <span>Đã kiểm tra </span>
                </> : ''
              }
            </div>
          </div>
          <div className="comment">
            <div className="comment__text">
              <p>
                {textComment}
              </p>
            </div>
            <ul className="comment__image">
              {/*
            <li className="comment__image___item video">
              <picture>
                <img
                  src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                  alt=""
                />
              </picture>

              <div className="playVideo">
                <i className="fa-size fa-solid fa-video" />
                <span>4:30</span>
              </div>
            </li>
            */}
              {
                images && images.map(item => {
                  return (
                    <li onClick={() => onShowBackgroundFixed(item.link, item.code, 'image')} key={item.code} className={`comment__image___item`}>
                      <picture>
                        <img
                          src={item.link}
                          alt=""
                        />
                      </picture>
                    </li>
                  )
                })
              }
              {
                videos && videos.map(item => {
                  return (
                    <li onClick={() => onShowBackgroundFixed(item.link, item.code, 'video')} key={item.code} className="comment__image___item video">
                      <picture>
                        <img
                          src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                          alt=""
                        />
                      </picture>
                      <div className="playVideo">
                        <i className="fa-size fa-solid fa-video" />
                        <span>4:30</span>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="btnComment">
            <div className="btnComment__content">
              <button className="btnLike" type="button">
                <i className="fa-solid fa-thumbs-up fa-size" />
                Thích
              </button>
              <button onClick={() => activeCommentReplay(code, !dataIsCommentReplay.isActive)} className="btnRep" type="button">
                <i className="fa-solid fa-comment-dots fa-size" />
                Phản hồi
              </button>
            </div>
          </div>
          {
            commentReplay && commentReplay.map(item => {
              return (
                <CommentReplay
                  key={item.code}
                  user={item.user}
                  textComment={item.textComment}
                  dateComment={item.dateComment}
                  like={item.like}
                  isCheck={item.isCheck}
                  codeCommentReplay={item.codeReplay}
                  codeComment={code}
                  codeShop={codeShop}
                />
              )
            })
          }
          <div className="repComment" style={{ display: "" }}>
            {
              dataIsCommentReplay.isActive && dataIsCommentReplay.codeComment === code ? <CommentSendReplay /> : ''
            }
          </div>
        </div>
      </div>
    </>
  )
}
