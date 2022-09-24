import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterLinkConfig } from "../../../constants/RouterLink";
import { selectBackgroundFixedValue } from "../../../redux/features/backgroundFixed/backgroundFixedSelects";
import { addBackground } from "../../../redux/features/backgroundFixed/backgroundFixedSlice";
import { selectCommentLoading, selectComments } from "../../../redux/features/comment/commentSelects";
import { sortComment } from "../../../redux/features/comment/commentSlice";
import { selectProductDetail, selectProductLoading } from "../../../redux/features/product/productSelects";
import { getProductByCode } from "../../../redux/features/product/productThunks";
import BackgroundFixed from "../../BackgroundFixed/BackgroundFixed";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import CommentItem from "./CommentItem/CommentItem";

export default function ProductDetailComment() {
  const [isActice, setIsActive] = useState()
  const router = useRouter()
  const dispatch = useDispatch()
  const dataComments = useSelector(selectComments)
  const loadingComment = useSelector(selectCommentLoading)
  const stValueBackgroundShow = useSelector(selectBackgroundFixedValue)
  const dataProductDetail = useSelector(selectProductDetail);
  const loadingProductDetail = useSelector(selectProductLoading)

  useEffect(() => {
    const result = router.query.name.split('.', 2)
    if (result[1]) {
      dispatch(getProductByCode(Number(result[1])))
    }
    else {
      router.push(RouterLinkConfig.notFound)
    }
  }, [router.query.name])
  const onSortComment = (type) => {
    setIsActive(type)
    dispatch(sortComment({ type }))
  }
  const onShowBackgroundFixed = (image, code, type) => {
    const valueBackground = {
      code,
      image,
      isActice: true,
      type
    }
    dispatch(addBackground({ valueBackground }))
  }
  return (
    <>

      {stValueBackgroundShow.isActice ? <BackgroundFixed /> : ''}
      {
        !loadingComment && dataProductDetail && !loadingProductDetail ?
          <>
            <div className="evaluate__point">
              <div className="evaluate__point___user evaluate__point___top">
                <div className="left">
                  <div className="title">
                    <h4>4.9</h4>
                    <div className="w">
                      <div className="star">
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                        <i className="fa-solid fa-star fa-size" />
                      </div>
                      <span>1041+ nhận xét </span>
                    </div>
                  </div>
                  <ul className="point">
                    <li className="point__item">
                      <div className="star">
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                      </div>
                      <div className="wp">
                        <div className="wp__after" />
                      </div>
                      <div className="text">
                        <span>914.914+</span>
                      </div>
                    </li>
                    <li className="point__item">
                      <div className="star">
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star not-active" />
                      </div>
                      <div className="wp" />
                      <div className="text">
                        <span>12.000+</span>
                      </div>
                    </li>
                    <li className="point__item">
                      <div className="star">
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star not-active" />
                        <i className="fa-size fa-solid fa-star not-active" />
                      </div>
                      <div className="wp" />
                      <div className="text">
                        <span>912</span>
                      </div>
                    </li>
                    <li className="point__item">
                      <div className="star">
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star not-active" />
                        <i className="fa-size fa-solid fa-star not-active" />
                        <i className="fa-size fa-solid fa-star not-active" />
                      </div>
                      <div className="wp" />
                      <div className="text">
                        <span>120</span>
                      </div>
                    </li>
                    <li className="point__item">
                      <div className="star">
                        <i className="fa-size fa-solid fa-star" />
                        <i className="fa-size fa-solid fa-star not-active" />
                        <i className="fa-size fa-solid fa-star not-active" />
                        <i className="fa-size fa-solid fa-star not-active" />
                        <i className="fa-size fa-solid fa-star not-active" />
                      </div>
                      <div className="wp" />
                      <div className="text">
                        <span>40</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="right">
                  <div className="title">
                    <h4>Tất cả hình ảnh (6)</h4>
                  </div>
                  <ul className="image">
                    {
                      dataComments && dataProductDetail[0] && dataComments.map(item => {
                        if (item.codeProduct === dataProductDetail[0].codeProduct) {
                          return item.commentImages.map(item_w => {
                            return (
                              <li onClick={() => onShowBackgroundFixed(item_w.link, item_w.code, 'image')} className="image__item">
                                <picture>
                                  <img
                                    src={item_w.link}
                                    alt=""
                                  />
                                </picture>
                              </li>
                            )
                          })
                        }
                      })
                    }

                  </ul>
                  <div className="sort">
                    <h3 className="w">Lọc theo :</h3>
                    <ul className="sort__main">
                      <li onClick={() => onSortComment('sortaz')} className={`sort__main___item ${isActice === 'sortaz' ? 'active' : ''}`}>
                        Đánh giá thấp đến cao
                      </li>
                      <li onClick={() => onSortComment('sortza')} className={`sort__main___item ${isActice === 'sortza' ? 'active' : ''}`}>
                        Đánh giá cao đến thấp
                      </li>
                      <li onClick={() => onSortComment('sort5s')} className={`sort__main___item ${isActice === 'sort5s' ? 'active' : ''}`}>
                        5 <i className="fa-solid fa-star fa-size" />
                      </li>
                      <li onClick={() => onSortComment('sort4s')} className={`sort__main___item ${isActice === 'sort4s' ? 'active' : ''}`}>
                        4 <i className="fa-solid fa-star fa-size" />
                      </li>
                      <li onClick={() => onSortComment('sort3s')} className={`sort__main___item ${isActice === 'sort3s' ? 'active' : ''}`}>
                        3 <i className="fa-solid fa-star fa-size" />
                      </li>
                      <li onClick={() => onSortComment('sort2s')} className={`sort__main___item ${isActice === 'sort2s' ? 'active' : ''}`}>
                        2 <i className="fa-solid fa-star fa-size" />
                      </li>
                      <li onClick={() => onSortComment('sort1s')} className={`sort__main___item ${isActice === 'sort1s' ? 'active' : ''}`}>
                        1 <i className="fa-solid fa-star fa-size" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Item Comment */}

              {
                dataComments && dataProductDetail[0] && dataComments.map((item) => {
                  if (item.codeProduct === dataProductDetail[0].codeProduct) {
                    return <>
                      <CommentItem
                        key={item.code}
                        avatar={item.user.avatar}
                        name={item.user.name}
                        dateComment={item.dateComment}
                        like={item.like}
                        isCheck={item.isCheck}
                        textComment={item.textComment}
                        code={item.code}
                        commentReplay={item.commentReplay}
                        rating={item.rating}
                        images={item.commentImages}
                        videos={item.videos}
                        codeShop={item.codeShop}
                      />

                    </>
                  }

                })
              }
              <div />
            </div>
            <div className="evaluate__pagination">
              <ul className="evaluate__pagination___main">
                <li className="item prev">
                  <i className="fa-solid fa-angle-left" />
                </li>
                <li className="item active">1</li>
                <li className="item">1</li>
                <li className="item">1</li>
                <li className="item">...</li>
                <li className="item">1</li>
                <li className="item">1</li>
                <li className="item">1</li>
                <li className="item next">
                  <i className="fa-solid fa-angle-right" />
                </li>
              </ul>
            </div>

          </>
          : <LoadingSpinner css={{ with: '100%', textAlign: 'center' }} />
      }
    </>
  )
}
