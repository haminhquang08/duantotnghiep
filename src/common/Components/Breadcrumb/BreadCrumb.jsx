import Link from "next/link"

export default function BreadCrumb({ data }) {

  return (
    <ul className="main">
      {
        data && data.map(item => {
          return (
            <Link href={item.link}>
              <a className="main__item">
                <li className="main__item">{item.name === 'index' ? 'Trang chủ ' : item.name}</li>
              </a>
            </Link>
          )
        })
      }
    </ul>
  )
}
