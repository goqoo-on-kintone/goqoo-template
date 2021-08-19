import { helloGoqoo } from 'goqoo'
import type { IndexEvent } from 'types'

kintone.events.on('app.record.index.show', async (event: IndexEvent<any /* kintone.types.SavedXxxxFields */>) => {
  await helloGoqoo()
  return event
})
