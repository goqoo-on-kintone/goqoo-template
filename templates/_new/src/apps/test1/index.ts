import swal from 'sweetalert'
import { SmallLogo } from 'img'
import type { IndexEvent } from 'types'

kintone.events.on('app.record.index.show', (event: IndexEvent<any /* kintone.types.SavedXxxxFields */>) => {
  swal({
    text: 'Hello, Goqoo on kintone!',
    icon: SmallLogo,
  })

  return event
})
