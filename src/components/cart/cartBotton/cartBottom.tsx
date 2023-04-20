import {useNavigate} from 'react-router-dom'
//ts interface
interface Properties {
    button?: string,
    buttonFuncionality?: string
}

const CartBottom = ({button, buttonFuncionality}: Properties) => {
    const navigate = useNavigate()
return(
                      <div className="mt-6" data-testid="mainContainerCartBottom">
                        <a
                          onClick={() => navigate(buttonFuncionality || '/')}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          {button}
                        </a>
                      </div>
)
}

export default CartBottom;