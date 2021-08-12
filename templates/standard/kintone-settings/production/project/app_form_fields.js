// Generated by ginue
module.exports = {
  properties: {
    レコード番号: {
      type: 'RECORD_NUMBER',
      code: 'レコード番号',
      label: 'レコード番号',
      noLabel: false,
    },
    更新者: {
      type: 'MODIFIER',
      code: '更新者',
      label: '更新者',
      noLabel: false,
    },
    合計費用: {
      type: 'CALC',
      code: '合計費用',
      label: '合計費用',
      noLabel: false,
      required: false,
      expression: 'プラン費用+オプション費用',
      format: 'NUMBER_DIGIT',
      displayScale: '',
      hideExpression: false,
      unit: '',
      unitPosition: 'BEFORE',
    },
    ステータス: {
      type: 'STATUS',
      code: 'ステータス',
      label: 'ステータス',
      enabled: false,
    },
    商談担当者: {
      type: 'USER_SELECT',
      code: '商談担当者',
      label: '商談担当者',
      noLabel: false,
      required: false,
      entities: [],
      defaultValue: [
        {
          type: 'FUNCTION',
          code: 'LOGINUSER()',
        },
      ],
    },
    詳細: {
      type: 'MULTI_LINE_TEXT',
      code: '詳細',
      label: '詳細',
      noLabel: false,
      required: false,
      defaultValue: '',
    },
    プラン費用: {
      type: 'NUMBER',
      code: 'プラン費用',
      label: 'プラン費用',
      noLabel: false,
      required: false,
      minValue: '',
      maxValue: '',
      digit: true,
      unique: false,
      defaultValue: '0',
      displayScale: '',
      unit: '',
      unitPosition: 'BEFORE',
    },
    担当者名: {
      type: 'SINGLE_LINE_TEXT',
      code: '担当者名',
      label: '担当者名',
      noLabel: false,
      required: false,
      minLength: '',
      maxLength: '',
      expression: '',
      hideExpression: false,
      unique: false,
      defaultValue: '',
    },
    案件名: {
      type: 'SINGLE_LINE_TEXT',
      code: '案件名',
      label: '案件名',
      noLabel: false,
      required: true,
      minLength: '',
      maxLength: '64',
      expression: '',
      hideExpression: false,
      unique: true,
      defaultValue: '',
    },
    カテゴリー: {
      type: 'CATEGORY',
      code: 'カテゴリー',
      label: 'カテゴリー',
      enabled: false,
    },
    顧客名: {
      type: 'SINGLE_LINE_TEXT',
      code: '顧客名',
      label: '顧客名',
      noLabel: false,
      required: true,
      lookup: {
        relatedApp: {
          app: '176',
          code: '',
        },
        relatedKeyField: '顧客名',
        fieldMappings: [
          {
            field: '部署名',
            relatedField: '部署名',
          },
          {
            field: '担当者名',
            relatedField: '担当者名',
          },
          {
            field: '顧客管理レコード番号_関連レコード紐付け用',
            relatedField: 'レコード番号',
          },
        ],
        lookupPickerFields: ['顧客名', '部署名', '住所'],
        filterCond: '',
        sort: 'レコード番号 desc',
      },
    },
    顧客管理レコード番号_関連レコード紐付け用: {
      type: 'NUMBER',
      code: '顧客管理レコード番号_関連レコード紐付け用',
      label: '顧客管理レコード番号（関連レコード紐付け用）',
      noLabel: false,
      required: false,
      minValue: '',
      maxValue: '',
      digit: false,
      unique: false,
      defaultValue: '',
      displayScale: '',
      unit: '',
      unitPosition: 'BEFORE',
    },
    オプション費用: {
      type: 'NUMBER',
      code: 'オプション費用',
      label: 'オプション費用',
      noLabel: false,
      required: false,
      minValue: '',
      maxValue: '',
      digit: true,
      unique: false,
      defaultValue: '0',
      displayScale: '',
      unit: '',
      unitPosition: 'BEFORE',
    },
    案件に紐付く活動履歴: {
      type: 'REFERENCE_TABLE',
      code: '案件に紐付く活動履歴',
      label: '案件に紐付く活動履歴',
      noLabel: false,
      referenceTable: {
        relatedApp: {
          app: '177',
          code: '',
        },
        condition: {
          field: 'レコード番号',
          relatedField: '案件管理レコード番号_関連レコード一覧紐付け用',
        },
        filterCond: '',
        displayFields: ['対応日時', '対応内容', '商談メモ'],
        sort: '対応日時 asc',
        size: '5',
      },
    },
    確度: {
      type: 'DROP_DOWN',
      code: '確度',
      label: '確度',
      noLabel: false,
      required: true,
      options: {
        '100%': {
          label: '100%',
          index: '5',
        },
        '0%': {
          label: '0%',
          index: '0',
        },
        '20%': {
          label: '20%',
          index: '1',
        },
        '40%': {
          label: '40%',
          index: '2',
        },
        '60%': {
          label: '60%',
          index: '3',
        },
        '80%': {
          label: '80%',
          index: '4',
        },
      },
      defaultValue: '0%',
    },
    オプション: {
      type: 'MULTI_SELECT',
      code: 'オプション',
      label: 'オプション',
      noLabel: false,
      required: false,
      options: {
        Xオプション: {
          label: 'Xオプション',
          index: '0',
        },
        Zオプション: {
          label: 'Zオプション',
          index: '2',
        },
        Yオプション: {
          label: 'Yオプション',
          index: '1',
        },
      },
      defaultValue: [],
    },
    作業者: {
      type: 'STATUS_ASSIGNEE',
      code: '作業者',
      label: '作業者',
      enabled: false,
    },
    資料: {
      type: 'FILE',
      code: '資料',
      label: '資料',
      noLabel: false,
      required: false,
      thumbnailSize: '150',
    },
    作成者: {
      type: 'CREATOR',
      code: '作成者',
      label: '作成者',
      noLabel: false,
    },
    提案プラン: {
      type: 'DROP_DOWN',
      code: '提案プラン',
      label: '提案プラン',
      noLabel: false,
      required: false,
      options: {
        Bプラン: {
          label: 'Bプラン',
          index: '1',
        },
        Cプラン: {
          label: 'Cプラン',
          index: '2',
        },
        Aプラン: {
          label: 'Aプラン',
          index: '0',
        },
        その他: {
          label: 'その他',
          index: '3',
        },
      },
      defaultValue: '',
    },
    受注予定日: {
      type: 'DATE',
      code: '受注予定日',
      label: '受注予定日',
      noLabel: false,
      required: false,
      unique: false,
      defaultValue: '',
      defaultNowValue: false,
    },
    部署名: {
      type: 'SINGLE_LINE_TEXT',
      code: '部署名',
      label: '部署名',
      noLabel: false,
      required: false,
      minLength: '',
      maxLength: '',
      expression: '',
      hideExpression: false,
      unique: false,
      defaultValue: '',
    },
    初回商談日: {
      type: 'DATE',
      code: '初回商談日',
      label: '初回商談日',
      noLabel: false,
      required: false,
      unique: false,
      defaultValue: '',
      defaultNowValue: true,
    },
    更新日時: {
      type: 'UPDATED_TIME',
      code: '更新日時',
      label: '更新日時',
      noLabel: false,
    },
    作成日時: {
      type: 'CREATED_TIME',
      code: '作成日時',
      label: '作成日時',
      noLabel: false,
    },
  },
}