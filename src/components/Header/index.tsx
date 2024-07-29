import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import LogoSvg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import NewTransactionModal from '../NewTransactionModal'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={LogoSvg} alt="logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
