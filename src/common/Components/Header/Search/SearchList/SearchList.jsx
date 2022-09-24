import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { hideDisplay } from "../../../../redux/features/showDisplay/showSearchDisplaySlice"

export default function SearchList({ nameSearch, refInputSearch }) {

  const refSearch = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    const closeSearchList = (e) => {
      if (refSearch.current && !refSearch.current.contains(e.target) && !refInputSearch.current.contains(e.target)) {
        dispatch(hideDisplay())
      }
    }
    document.body.addEventListener('click', closeSearchList)
  }, [dispatch, refInputSearch])

  const dataSearch = [
    {
      name: "Lẩu bò nhà làm "
    },
    {
      name: "Cá hấp "
    },
    {
      name: "Cá kho tổ "
    },
    {
      name: "Lẩu bò nhà làm 2 "
    },
    {
      name: "Lẩu gà lá giang "
    },
    {
      name: "Cá trê kho "
    },
    {
      name: "Gà luộc  "
    },
    {
      name: "Lẩu cá bớp"
    },
  ]
  return (
    <div ref={refSearch} className="search__list">
      <div className="wp">
        <div className="title">
          <i className="fa-solid fa-signature" />
          Từ khóa tìm kiếm
        </div>
        <ul className="search__list___wp">
          {
            dataSearch.map((item, index) => {
              if (nameSearch && item.name.toLowerCase().includes(nameSearch.name.toLowerCase()) && nameSearch.name) {
                return (
                  <li key={index} className="search__list___wp____item">
                    <div className="text">
                      <i className="fa-solid fa-magnifying-glass fa-size" />
                      <p>{item.name}</p>
                    </div>
                    <i className="fa-solid fa-xmark" />
                  </li>
                )
              }
            })
          }
          <div className="search__list___wp____show">
            <p>Xem thêm</p>
            <i className="fa-solid fa-chevron-down fa-size" />
          </div>
        </ul>
      </div>
      <div className="wp">
        <div className="title">
          <i className="fa-solid fa-font" />
          Từ khóa tìm kiếm phổ biến
        </div>
        <ul className="keyword">
          <li className="keyword__item">Sản phẩm hot</li>
          <li className="keyword__item">Sản phẩm hot</li>
          <li className="keyword__item">
            Sản phẩm đang bán chạy
          </li>
          <li className="keyword__item">Gà đông tảo</li>
          <li className="keyword__item">Trà sữa</li>
          <li className="keyword__item">Cơm chiên</li>
          <li className="keyword__item">Cơm sinh viên</li>
          <li className="keyword__item">Cơm 0đ</li>
        </ul>
      </div>
    </div>
  )
}
