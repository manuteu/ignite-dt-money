import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'

export default function NewTransactionModal() {
  return (
    <>
      {/*
          Portal
          ===========================================================================
          Faz com que o modal seja renderizdo fora do component cora da ROOT do React
          ===========================================================================
      */}
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form action="">
            <input type="text" placeholder='Descrição' required />
            <input type="text" placeholder='Preço' required />
            <input type="text" placeholder='Categoria' required />

            <TransactionType>
              <TransactionTypeButton value='income' variant='income'>
                <ArrowCircleUp size={24} />
                Entrada
              </TransactionTypeButton>

              <TransactionTypeButton value='outcome' variant='outcome'>
                <ArrowCircleDown size={24} />
                Saída
              </TransactionTypeButton>
            </TransactionType>

            <button type="submit">
              Cadastrar
            </button>
          </form>

        </Content>
      </Dialog.Portal >
    </>
  )
}
