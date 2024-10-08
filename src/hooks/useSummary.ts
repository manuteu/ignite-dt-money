import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../contexts/TransactionContext';
import { useMemo } from 'react';

export interface SumaryReturn {
  income: number;
  outcome: number;
  total: number;
}

export function useSummary(): SumaryReturn {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions;
  });

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price;
          acc.total += transaction.price;
        } else {
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
        }

        return acc;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return summary;
}
