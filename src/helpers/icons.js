import {
  faTimes,
  faSortDown,
  faArrowsAltV,
  faTrash,
  faPhoneVolume,
  faMapPin
} from "@fortawesome/free-solid-svg-icons"

import { library } from "@fortawesome/fontawesome-svg-core"

const Icons = () => {
  return library.add(
    faTimes,
    faSortDown,
    faArrowsAltV,
    faTrash,
    faPhoneVolume,
    faMapPin
  )
}

export default Icons
