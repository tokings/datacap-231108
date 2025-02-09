import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faAnglesLeft,
  faAnglesRight,
  faArrowDown19,
  faArrowDown91,
  faArrowLeft,
  faArrowRight,
  faArrowUp19,
  faArrowUpAZ,
  faCircle,
  faCircleInfo,
  faClock,
  faColumns,
  faDatabase,
  faDroplet,
  faEye,
  faFilter,
  faFlag,
  faFont,
  faGear,
  faKey,
  faMagnifyingGlass,
  faMinus,
  faRepeat,
  faSun,
  faTable,
  faTextHeight,
  faTimes,
  faUpload
} from '@fortawesome/free-solid-svg-icons'

/**
 * Creates icons for the given app.
 *
 * @param {any} app - The app object.
 */
const createIcons = (app: any) => {
  library.add(faArrowRight,
    faMinus,
    faUpload,
    faEye,
    faArrowUp19,
    faArrowDown91,
    faFlag,
    faMagnifyingGlass,
    faArrowDown19,
    faGear,
    faAnglesLeft,
    faAnglesRight,
    faFilter,
    faDatabase,
    faTable,
    faColumns,
    faKey,
    faRepeat,
    faDroplet,
    faCircle,
    faCircleInfo,
    faTimes,
    faClock,
    faFont,
    faArrowUpAZ,
    faSun,
    faTextHeight,
    faArrowLeft)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}

export {
  createIcons
}
