#!/usr/bin/env bash

. .env

if [ -z "$1" -o -z "$2" ]; then
  echo "usage: $0 <AppId> <AppName>"
  exit 1
fi

# TODO: パスワード環境変数などの存在確認

APP_ID=${1}
APP_NAME_CAMEL=${2}
APP_NAME_KEBAB=`echo "${APP_NAME_CAMEL}"| sed -r 's/^./\L\0/; s/([A-Z])/-\1\E/g; s/.*/\L\0/g;'`

echo $APP_NAME_KEBAB

npx kintone-dts-gen --host ${DTS_DOMAIN} \
                -u ${DTS_USERNAME} \
                -p ${DTS_PASSWORD} \
                --app-id ${APP_ID} \
                --type-name ${APP_NAME_CAMEL}Fields \
                -o types/${APP_NAME_KEBAB}-fields.d.ts
