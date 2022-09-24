import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/features/User/userSelect";

export default function UserAddressDetail() {
  const router = useRouter();
  const userArray = useSelector(selectUser);
  const [valueAddress,setValueAddress]= useState({})
  const [userDetail, setUserDetail] = useState(); 
  useEffect(()=>{
    let isAddress = false
    for(let i =0;i<userArray.address.length;i++){
      if(userArray.address[i].code === router.query.code){
        isAddress = true
        setValueAddress({
          name:userArray.address[i].name,
          phone: userArray.address[i].phone,
          phone2:userArray.address[i].phone2,
          email:userArray.address[i].email,
          numberHouse: userArray.address[i].numberHouse,
          district: userArray.address[i].district,
          province:userArray.address[i].province,
          city: userArray.address[i].city
        })
      }
    }
    if(!isAddress){
      router.push('/user/address')
    }
  },[router.query.code])

  
  return (
    <div className="content">
      {console.log(valueAddress)}
      <div className="title">
        <h4>
          <i className="fa-solid fa-location-dot fa-size" /> Chi tiết địa chỉ
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__address">
        <div className="content__address___main">
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-signature fa-size" /> Họ và tên 
            </label>
            <input type="text" value={valueAddress.name} name="username" id="" />
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-phone fa-size" />
              Số điện thoại
            </label>
            <input type="text" name="phone" id="" value={valueAddress.phone}/>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-phone fa-size" />
              Số điện thoại phụ
            </label>
            <input type="text" name="phone2" id="" value={valueAddress.phone2}/>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-at fa-size" /> Email
            </label>
            <input type="email" name="email" id="" value={valueAddress.email}/>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Số nhà / Đường
            </label>
            <select>
              <option name="numberHouse" value="" selected>{valueAddress.numberHouse}</option>
            </select>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Xã / Phường
            </label>
            <select>
              <option name="district" value="">{valueAddress.district}</option>
            </select>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Quận / Huyện
            </label>
            <select>
              <option name="city" value="">{valueAddress.city}</option>
            </select>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Tỉnh / Thành phố
            </label>
            <select>
              <option name="province">{valueAddress.province}</option>
            </select>
          </div>
          <div className="content__address___main____csItemFw">
            <label htmlFor="">
              <i className="fa-solid fa-location-dot fa-size" />
              Địa chỉ cụ thể
            </label>
            <textarea name="" id="" defaultValue={""} />
          </div>
          <div className="content__address___main____btn">
            <button>
              <i className="fa-solid fa-pencil fa-size" /> Cập nhật địa chỉ
            </button>
          </div>
        </div>
        <div className="content__address___not">
          <div className="title">
            <h4>
              <i className="fa-solid fa-triangle-exclamation" /> Lưu ý
            </h4>
          </div>
          <ul className="main">
            <li className="main__item">
              <p>
                <b>1:</b>Địa chi của bạn là đia chỉ giao hàng của bạn , Địa chỉ
                giao hàng phải đúng với địa chỉ của bạn đang ở đề giao đúng nơi
                bạn ở
              </p>
            </li>
            <li className="main__item">
              <p>
                <b>2:</b>1 tài khoản chi được hỗ trợ tối đa 3 địa chỉ . 1 địa
                chỉ chính , 2 địa chỉ phụ
              </p>
            </li>
            <li className="main__item">
              <p>
                <b>3:</b> Việc cung cấp địa chỉ ảo hoặc có tình sẽ bị kiểm tra
                tài khoản và khóa vĩnh viễn nếu vi phạm
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
