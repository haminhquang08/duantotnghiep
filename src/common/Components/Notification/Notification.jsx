import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { removeNotification, removeNotificationAll } from "../../redux/features/notification/notificationSlice"
import ReactHtmlParser from 'react-html-parser';
import { useRouter } from "next/router";

const Notification = (props) => {
  const [loading, setLoading] = useState(0)
  const [isClose, setIsClose] = useState(false)
  const [intervalID, setIntervalID] = useState(null)
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    if (loading === 100) {
      handleCloseNotification()
    }
  }, [loading])
  useEffect(() => {
    handleStarTimer()
  }, [])

  useEffect(() => { }, [router])
  const handleStarTimer = () => {
    const id = setInterval(() => {
      setLoading((prev) => {
        if (prev < 100) {
          return prev + 0.5
        }
        clearInterval(id)
        return prev
      })
    }, 20)
    setIntervalID(id)
  }
  const handlePauseTimer = () => {
    clearInterval(intervalID)
  }
  const handleCloseNotification = () => {
    handlePauseTimer();
    setIsClose(true)
    dispatch(removeNotification({ id: props.id }))
  }
  const closeNotification = () => {
    setIsClose(true)
  }

  return (
    <div className="notification__inner" style={{ display: isClose ? 'none' : '' }}>
      <div onMouseEnter={handlePauseTimer} onMouseLeave={handleStarTimer} className={`owp ${props.type} ${isClose ? 'exit' : ''}`}>
        <div className={`wdLoading wdLoading-${props.type}`} style={{ width: `${loading}%` }}>
        </div>
        <div className="icon">
          {ReactHtmlParser(props.icon)}
        </div>
        <div className="text">
          <span>{props.message}</span>
        </div>
        <div onClick={closeNotification} className="btn">
          <i className="fa-solid fa-xmark btn-close btn-active" />
        </div>
      </div>
    </div>
  )
}
export default Notification
