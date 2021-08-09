import swal from 'sweetalert'
import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { SmallLogo } from 'img'
import type { IndexEvent } from 'types'

import React from 'react'
import ReactDOM from 'react-dom'

export default async (event: IndexEvent<any /* kintone.types.SavedXxxxFields */>) => {
  if (event.viewName !== 'カスタマイズビュー') {
    return
  }

  swal({
    text: 'Hello, Goqoo on kintone!',
    icon: SmallLogo,
  })

  // kintoneに設定済みのタグを自作のHTMLファイルで置換
  const divNode = document.querySelector('#customize-view')
  if (!divNode) return

  const client = new KintoneRestAPIClient()
  const { properties } = await client.app.getFormFields({ app: kintone.app.getId() as number })

  const fieldCodes = ['会社名', '部署名', '担当者名', '郵便番号', 'TEL', 'FAX', '住所']
  const fields = fieldCodes.map((code) => ({ code, label: properties[code].label }))
  const records = event.records.map((record) =>
    Object.fromEntries(fieldCodes.map((code) => [code, record[code].value]))
  )

  const dummyAlert = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.innerHTML || e.currentTarget.value
    swal(`「${buttonName}」ボタンはダミーです。`)
  }

  const divNodeInner = document.createElement('div')
  divNode.appendChild(divNodeInner)
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
                <th>{fields.map(({ label }) => label)}</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, i) => (
                <tr key={i}>
                  {fields.map(({ code }) => (
                    <td>{record[code]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>,
    divNodeInner
  )
}
