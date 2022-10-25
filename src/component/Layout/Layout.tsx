import { ReactNode } from 'react'
import css from './Layout.module.scss'

type Props = {
  children?: ReactNode
}

/**
 * タイトル：レイアウトコンポーネント
 *
 * 概要：全てのページに適用する画面構成スタイル用のコンポーネントである。
 */
const Layout = (props: Props) => {
  return (
    <>
      <div className={css.sample}>{props.children}</div>
      <div>sample</div>
    </>
  )
}

export default Layout
