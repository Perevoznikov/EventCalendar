import Swal, {SweetAlertOptions, SweetAlertResult} from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const setModal = ({icon = 'error', ...setting}: SweetAlertOptions): Promise<void | SweetAlertResult> => {
    return MySwal.fire({
        icon: icon,
        ...setting
    })
}

export default setModal;