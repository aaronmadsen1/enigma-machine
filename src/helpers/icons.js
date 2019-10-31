import {
  faTrash,
  faPhoneVolume,
  faMapPin
} from "@fortawesome/free-solid-svg-icons"

import { library } from "@fortawesome/fontawesome-svg-core"

const Icons = () => {
  return library.add(faTrash, faPhoneVolume, faMapPin)
}

export default Icons
