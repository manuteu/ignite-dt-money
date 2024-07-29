import Header from '../../components/Header'
import Summary from '../../components/Summary'
import SearchForm from './components/SearchForm'
import { PriceHighlight, TransactionContainer, TransactionsTable } from './styles'

export default function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td><PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>hamburguer</td>
              <td>R$ 20,00</td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width='50%'>Boguinha</td>
              <td><PriceHighlight variant='outcome'>- R$ 1.000,00</PriceHighlight></td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>

        </TransactionsTable>
      </TransactionContainer>
    </div>
  )
}
