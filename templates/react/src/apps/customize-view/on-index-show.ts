import render from './customize-view'

kintone.events.on('app.record.index.show', (event) => {
  event = render(event)
  return event
})
