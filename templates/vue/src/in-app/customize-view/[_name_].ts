import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { helloGoqoo, confirmDialog, successDialog, errorDialog } from 'goqoo'
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

  const records = await client.record.getAllRecords({
    app: kintone.app.getId()!,
    condition: kintone.app.getQueryCondition()!,
  })

  divNode.insertAdjacentHTML('beforeend', HTML_TEMPLATE)
  new Vue({
    el: '#customize-view-inner',
    data: { records },
    computed: {
      fields: () => fields,
    },
    methods: {
      async hello() {
        await helloGoqoo()
      },
      async saveAllRecords() {
        try {
          if (!(await confirmDialog(`${this.records.length}件のレコードを保存します。よろしいですか？`))) {
            return
          }

          await client.record.updateAllRecords({
            app: kintone.app.getId() as number,
            records: this.records.map((record) => ({
              id: record.$id.value as string,
              revision: record.$revision.value as string,
              record: Object.fromEntries(fieldCodes.map((code) => [code, { value: record[code].value }])),
            })),
          })

          await successDialog('完了しました。')
          location.reload()
        } catch (e) {
          errorDialog(e as Error)
        }
      },
    },
  })
})
