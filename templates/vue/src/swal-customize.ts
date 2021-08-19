import swal from 'sweetalert'
import type { SwalOptions } from 'sweetalert/typings/modules/options'
import { SmallLogo } from 'img'

type SwalResult = null | any

export const helloGoqoo = async (): Promise<SwalResult> => {
  return swal({
    text: 'Hello, Goqoo on kintone!',
    icon: SmallLogo,
  })
}

export const confirmDialog = async (text: string): Promise<SwalResult> => {
  const result = await swal({
    icon: 'info',
    text,
    buttons: {
      cancel: true,
      confirm: {
        // Spinner回して待機
        closeModal: false,
      },
    },
    // Cancelクリック以外では閉じないように制限
    // Spinner中に間違えて閉じるの予防
    closeOnClickOutside: false,
    closeOnEsc: false,
  })

  // Spinner回り始めたらキャンセルボタンを非表示に
  const cancelButton = document.querySelector('.swal-button--cancel')
  cancelButton?.parentNode?.removeChild(cancelButton)

  return result
}

export const successDialog = async (text: string): Promise<SwalResult> => {
  return swal({ icon: 'success', text })
}

export const errorDialog = async (error: Error | string): Promise<SwalResult> => {
  const text = error instanceof Error ? error.message : error || 'エラーが発生しました。'
  const content: SwalOptions['content'] | undefined =
    error instanceof Error
      ? {
          // Errorオブジェクトの詳細をJSON形式で表示
          element: 'textarea',
          attributes: {
            value: JSON.stringify({ ...error, stack: error.stack }, null, ' '),
            readOnly: true,
            style: 'width: 100%; height: 20rem;',
          },
        }
      : undefined

  return swal({
    icon: 'error',
    text,
    content,
  })
}
