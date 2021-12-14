import type { IndexEvent } from 'types'
import { helloGoqoo } from 'goqoo'

kintone.events.on('app.record.index.show', async (event: IndexEvent<any /* Kintone.types.SavedXxxxFields */>) => {
  await helloGoqoo()
  return event
})
