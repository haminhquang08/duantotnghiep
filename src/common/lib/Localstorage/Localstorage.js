export const LocalStorage = (title, value, action) => {
  let dataGet = null;
  if (action === "SET") {
    var dataFk = [];
    if (typeof value === "object") {
      if (localStorage.getItem(title)) {
      } else {
        localStorage.setItem(title, JSON.stringify(value));
      }
    } else {
      let data = JSON.parse(localStorage.getItem(title));
      if (localStorage.getItem(title)) {
        var dataFk = [];

        if (data.length > 0 && data.length < 15) {
          if (data.indexOf(value) === -1) {
            data.push(value);
            localStorage.setItem(title, JSON.stringify(data));
          }
        } else {
          data[0] = value;
          localStorage.setItem(title, JSON.stringify(data));
        }
      } else {
        dataFk.push(value);
        localStorage.setItem(title, JSON.stringify(dataFk));
      }
    }
  } else if (action === "GET") {
    return localStorage.getItem(title);
  } else if (action === "REMOVE") {
    if (localStorage.getItem(title)) {
      let data = JSON.parse(localStorage.getItem(title)).filter(
        (item) => item !== value
      );
      if (typeof data === "object") {
        localStorage.setItem(title, JSON.stringify(data));
      }
    } else {
      //localStorage.setItem(title, data)
    }
  } else if (action === "REMOVEFULL") {
    console.log("XOA DAT LAI");
    localStorage.removeItem("cart");
  } else {
    return null;
  }
};
// export async function getSeverSideProps() {
//   return {
//     props: {}
//   }
// }
