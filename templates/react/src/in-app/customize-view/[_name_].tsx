import { helloGoqoo } from 'goqoo'
import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { SmallLogo } from 'img'
import type { IndexEvent } from 'types'

import React from 'react'
import ReactDOM from 'react-dom'
import './[_name_].scss'

kintone.events.on('app.record.index.show', async (event: IndexEvent<any /* kintone.types.SavedXxxxFields */>) => {
  if (event.viewName !== 'カスタマイズビュー') {
    return
  }

  // kintoneに設定済みのタグを自作のHTMLファイルで置換
  const divNode = document.querySelector('#customize-view')
  if (!divNode) return

  const client = new KintoneRestAPIClient()
  const { properties } = await client.app.getFormFields({ app: kintone.app.getId() as number })

  const fieldCodes = /*%& fieldCodes %*/ /*% */ ['案件名', 'プラン費用', 'オプション費用', '詳細'] /* %*/
  const fields = fieldCodes.map((code) => ({ code, label: properties[code].label }))
  const records = event.records.map((record) =>
    Object.fromEntries(fieldCodes.map((code) => [code, record[code].value]))
  )

  const divNodeInner = document.createElement('div')
  divNode.appendChild(divNodeInner)
  ReactDOM.render(
    <div id="customize-view-inner">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <button className="btn btn-warning" onClick={helloGoqoo}>
              Hello
            </button>
            <button className="btn btn-primary" onClick={helloGoqoo}>
              全レコードを保存
            </button>
          </div>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered table-hover table-sm table-goqoo">
            <thead>
              <tr>
                {fields.map(({ label }, i) => (
                  <th key={i}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record, i) => (
                <tr key={i}>
                  {fields.map(({ code }, j) => (
                    <td key={j}>
                      <input className="form-control" type="text" defaultValue={record[code]} />
                    </td>
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
})
