import { ReactNode } from 'react'
import css from './Layout.module.scss'

/**
 * タイトル：レイアウトコンポーネント
 * 概要：全てのページに適用する画面構成スタイル用のコンポーネントである。
 * @param {ReactNode} children 任意 初期値：なし
 *
 * @param
 */

type Props = {
  children?: ReactNode
}

const Layout = (props: Props) => {
  return (
    <>
      <div className={css.sample}>{props.children}</div>
      <div>sample</div>
    </>
  )
}

export default Layout
