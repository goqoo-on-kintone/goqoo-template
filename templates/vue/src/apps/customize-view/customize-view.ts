import swal from 'sweetalert'
import { KintoneRestAPIClient } from '@kintone/rest-api-client'
import { SmallLogo } from 'img'
import type { IndexEvent } from 'types'

import Vue from 'vue'
// @ts-expect-error
import HTML_TEMPLATE from './customize-view.html'
import './customize-view.scss'

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

  divNode.insertAdjacentHTML('beforebegin', HTML_TEMPLATE)
  new Vue({
    // Vueを適用するHTML_TEMPLATE内のelement
    el: '#customize-view-inner',
    data: {
      records,
      fields,
    },
    methods: {
      dummyAlert(e: any) {
        const buttonName = e.target.innerHTML || e.target.value
        swal(`「${buttonName}」ボタンはダミーです。`)
      },
    },
  })
}
