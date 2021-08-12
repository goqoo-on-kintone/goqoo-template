// Generated by ginue
module.exports = {
  views: {
    案件一覧: {
      type: 'LIST',
      name: '案件一覧',
      id: '2059',
      filterCond: '',
      sort: '作成日時 desc',
      index: '0',
      fields: ['顧客名', '案件名', '確度', '受注予定日', 'プラン費用', '商談担当者'],
    },
    受注済: {
      type: 'LIST',
      name: '受注済',
      id: '5520202',
      filterCond: '確度 in ("100%")',
      sort: '作成日時 desc',
      index: '1',
      fields: ['顧客名', '案件名', '確度', '受注予定日', 'プラン費用', '商談担当者'],
    },
  },
}
