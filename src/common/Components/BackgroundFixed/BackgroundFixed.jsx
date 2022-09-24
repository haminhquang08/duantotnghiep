import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectBackgroundFixedValue } from "../../redux/features/backgroundFixed/backgroundFixedSelects"
import { addBackground } from "../../redux/features/backgroundFixed/backgroundFixedSlice"
export default function BackgroundFixed() {
  const dispatch = useDispatch()
  const refBackground = useRef()
  const valueBackground = useSelector(selectBackgroundFixedValue)
  useEffect(() => {
    const valueBackground = {
      code: null,
      image: null,
      isActice: false
    }
    const closeBackground = (e) => {
      if (refBackground.current && !refBackground.current.contains(e.target)) {
        dispatch(addBackground({ valueBackground }))
      }
    }
    document.body.addEventListener('click', closeBackground)
  }, [])
  return (
    <div className="background showBackgroundOpacity">
      <div ref={refBackground} className="background__inner">
        <div className="image">
          {
            valueBackground && valueBackground.type === 'image' ?
              <picture>
                <img src={valueBackground && valueBackground.image} alt="" />
              </picture>
              : valueBackground.type === 'video' ?
                <iframe
                  src="https://www.youtube.com/embed/liGYXSvIv_s?list=RDwCIiCH8kqeA"
                  title="ROCK-mode -LiVE is Smile Always～PiNK & BLACK～ in 日本武道館「ちょこドーナツ」-" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                </iframe>
                : ''

          }
        </div>
      </div>
    </div>
  )
}
