import Head from "next/head";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import Search from "../../common/Components/Search/Search";

export default function SearchIdx() {
  const nameSearchRouter = useRouter()
  const data = useRef()
  return (
    <>
      <Head>
        <title>Tìm kiếm sản phẩm : {nameSearchRouter.query.name} </title>
      </Head>
      <Search />
    </>
  );

}
export async function getServerSideProps() {
  return {
    props: {

    }
  }
}

