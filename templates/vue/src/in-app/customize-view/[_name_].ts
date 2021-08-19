import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { helloGoqoo, confirmDialog, successDialog } from 'swal-customize'
import type { IndexEvent } from 'types'

import Vue from 'vue'
// @ts-expect-error
import HTML_TEMPLATE from './[_name_].html'
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
    Object.fromEntries(fieldCodes.map((code) => [code, record[code]]))
  )

  divNode.insertAdjacentHTML('beforeend', HTML_TEMPLATE)
  new Vue({
    el: '#customize-view-inner',
    data: { records },
    computed: {
      fields() {
        return fields
      },
    },
    methods: {
      async saveAllRecords() {
        if (!(await confirmDialog(`${this.records.length}件のレコードを保存します。よろしいですか？`))) return
        await new Promise((resolve) => setTimeout(resolve, 3000))
        await successDialog('完了しました。')
        location.reload()
      },
      async hello() {
        await helloGoqoo()
      },
    },
  })
})
