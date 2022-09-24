import Link from "next/link";
import UserInfoWo from "./UserInfoWo/UserInfoWo";
import UserInfoWp from "./UserInfoWp/UserInfoWp";

export default function UserInfo() {
  return (
    <div className="content">
      <div className="title">
        <h4>Thông tin tài khoản</h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="wp">
        <UserInfoWp />
        <UserInfoWo />
      </div>
    </div>
  );
}
