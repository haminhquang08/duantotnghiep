import axios from "axios";

export default axios.create({
  baseURL: "",
});

export const regUser = (value) => {
  if (value) {
    axios
      .post("/register", {
        fullName: value.fullName,
        userName: value.userName,
        passWord: value.passWord,
        phone: value.phone,
      })
      .then((res) => {
        if (res.status === 200) {
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
