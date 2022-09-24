import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LocalStorage } from "../../../lib/Localstorage/Localstorage";
import {
  hideDisplay,
  showDisplay,
} from "../../../redux/features/showDisplay/showSearchDisplaySlice";
import SearchList from "./SearchList/SearchList";

export default function Search() {
  /* Get isDisplaySeach Redux */
  const isDisplaySearchList = useSelector(
    (state) => state.showSearchDisplaySlice
  );
  const dispatch = useDispatch();
  /*Get Value Search */
  const [search, setSearch] = useState();

  /*Get class Input Search */
  const refInputSearch = useRef();
  const router = useRouter();
  const onChangeSearch = (e) => {
    setSearch({ name: e.target.value });
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (search && search.name) {
      router.push(`/search/${search.name}?sort=a-z&tow=-1`);
      LocalStorage("keywordSearch", search.name, "SET");
      dispatch(hideDisplay());
    }
  };

  return (
    <form
      onSubmit={onSearchSubmit}
      ref={refInputSearch}
      id="searchList"
      method=""
    >
      <div className="search">
        <input
          type="search"
          onClick={() => dispatch(showDisplay())}
          name="name"
          onChange={onChangeSearch}
          placeholder="Tìm kiếm sản phẩm ........... "
          id=""
        />
        <i className="fa-solid fa-magnifying-glass fa-size fa-search-sett" />
        {isDisplaySearchList.display ? (
          <SearchList nameSearch={search} refInputSearch={refInputSearch} />
        ) : (
          ""
        )}
      </div>
    </form>
  );
}
