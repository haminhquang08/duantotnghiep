import ProductDetail from "../../common/Components/ProductDetail/ProductDetail";
import Head from "next/head";
export default function ProductDetailId() {
  return (
    <>
      <Head>
        <title>Thông tin sản phẩm</title>
      </Head>
      <ProductDetail />
    </>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
