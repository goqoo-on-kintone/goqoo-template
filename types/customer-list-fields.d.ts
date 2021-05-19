declare namespace kintone.types {
  interface CustomerListFields {
    備考: kintone.fieldTypes.MultiLineText;
    文字列__1行_: kintone.fieldTypes.SingleLineText;
    郵便番号: kintone.fieldTypes.SingleLineText;
    文字列__1行__0: kintone.fieldTypes.SingleLineText;
    担当者名: kintone.fieldTypes.SingleLineText;
    メールアドレス: kintone.fieldTypes.SingleLineText;
    文字列__1行__1: kintone.fieldTypes.SingleLineText;
    顧客ランク: kintone.fieldTypes.DropDown;
    文字列__1行__2: kintone.fieldTypes.SingleLineText;
    FAX: kintone.fieldTypes.SingleLineText;

    会社ロゴ: kintone.fieldTypes.File;
    添付ファイル: kintone.fieldTypes.File;
  }
  interface SavedCustomerListFields extends CustomerListFields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
