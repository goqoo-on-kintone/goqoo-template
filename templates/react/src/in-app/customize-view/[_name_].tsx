import { helloGoqoo, confirmDialog, successDialog, errorDialog } from 'goqoo'
import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import type { IndexEvent } from 'types'

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './[_name_].scss'

type PromiseType<T extends Promise<any>> = T extends Promise<infer P> ? P : never
type Record = PromiseType<ReturnType<KintoneRestAPIClient['record']['getAllRecords']>>[number]
type Field = { code: string; label: string }

const saveAllRecords = async (records: Record[]) => {
  try {
    if (!(await confirmDialog(`${records.length}件のレコードを保存します。よろしいですか？`))) {
      return
    }

    const client = new KintoneRestAPIClient()
    await client.record.updateAllRecords({
      app: kintone.app.getId() as number,
      records: records.map((record) => ({
        id: record.$id.value as string,
        revision: record.$revision.value as string,
        record,
      })),
    })

    await successDialog('完了しました。')
    location.reload()
  } catch (e) {
    errorDialog(e)
  }
}

const CustomizeView = ({ records, fields }: { records: Record[]; fields: Field[] }) => {
  const fieldCodes = ['$id', '$revision', ...fields.map(({ code }) => code)]
  const [values, setValues] = useState(
    records.map((record) => Object.fromEntries(fieldCodes.map((code) => [code, { value: record[code].value }])))
  )
  const setFieldValue = (index: number, code: string, value: string) => {
    const newValues = values
    newValues[index] = { ...newValues[index], [code]: { value } }
    setValues(newValues)
  }

  return (
    <div id="customize-view-inner">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <button className="btn btn-warning" onClick={helloGoqoo}>
              Hello
            </button>
            <button className="btn btn-primary" onClick={() => saveAllRecords(values as unknown[] as Record[])}>
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
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={record[code].value as string}
                        onChange={(e) => setFieldValue(i, code, e.currentTarget.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

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

  const records = await client.record.getAllRecords({
    app: kintone.app.getId()!,
    condition: kintone.app.getQueryCondition()!,
  })

  const divNodeInner = document.createElement('div')
  divNode.appendChild(divNodeInner)
  ReactDOM.render(<CustomizeView records={records} fields={fields} />, divNodeInner)
})
