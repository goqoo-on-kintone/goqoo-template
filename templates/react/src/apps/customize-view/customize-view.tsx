import React from 'react'
import ReactDOM from 'react-dom'
import swal from 'sweetalert'
import type { IndexEvent } from 'types'

export default (event: IndexEvent<kintone.types.SavedCustomerListFields>) => {
  if (event.viewName !== 'カスタマイズビュー') {
    return
  }

  // kintoneに設定済みのタグを自作のHTMLファイルで置換
  const divNode = document.querySelector('#customize-view')

  const dummyAlert = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.innerHTML || e.currentTarget.value
    swal(`「${buttonName}」ボタンはダミーです。`)
  }

  ReactDOM.render(
    <div id="customize-view-inner">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <button className="btn btn-success" onClick={dummyAlert}>
              Excelダウンロード
            </button>
            <button className="btn btn-primary" onClick={dummyAlert}>
              全レコードを保存
            </button>
          </div>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered table-hover table-sm table-goqoo">
            <thead>
              <tr>
                <th>{'Label'}</th>
              </tr>
            </thead>
            <tbody>
              {['1', '2', '3'].map((text, i) => (
                <tr key={i}>
                  <td>{text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>,
    divNode
  )
}
