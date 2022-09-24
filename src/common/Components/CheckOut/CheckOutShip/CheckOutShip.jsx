import CheckOutShipItem from "./CheckOutShipItem/CheckOutShipItem";

export default function CheckOutShip() {
  return (
    <>
      <h4>
        <i className="fa-solid fa-boxes-stacked" /> Lựa chọn giao
        hàng
      </h4>
      <ul className="list">
        <CheckOutShipItem />
        <CheckOutShipItem />
        <CheckOutShipItem />
        <CheckOutShipItem />
        <CheckOutShipItem />
      </ul>
    </>
  )
}
