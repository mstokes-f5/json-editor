import { AbstractIconLib } from '../iconlib.js'

const icon_prefix = 'foundicon-'
const mapping = {
  collapse: 'minus',
  expand: 'plus',
  delete: 'remove',
  edit: 'edit',
  add: 'add-doc',
  cancel: 'error',
  save: 'checkmark',
  moveup: 'up-arrow',
  movedown: 'down-arrow',
  copy: 'page-copy',
  clear: 'remove',
  time: 'clock',
  calendar: 'calendar'
}

export class foundation2Iconlib extends AbstractIconLib {
  constructor () {
    super(icon_prefix, mapping)
  }
}
