import customize from './customize'

kintone.events.on('app.record.index.show', (event) => {
  console.log('foo')
  event = customize(event)
  return event
})
