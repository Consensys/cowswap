import { COW, GNO } from '@cowprotocol/common-const'
import { OrderClass, OrderKind, SupportedChainId } from '@cowprotocol/cow-sdk'
import { CurrencyAmount, Percent } from '@uniswap/sdk-core'

import { PriceImpact } from 'legacy/hooks/usePriceImpact'
import { Field } from 'legacy/state/types'

import { getAppData } from 'modules/appData'
import { TradeFlowContext } from 'modules/limitOrders/services/types'

import { CurrencyInfo } from 'common/pure/CurrencyInputPanel/types'

const chainId = SupportedChainId.MAINNET

const inputCurrency = COW[chainId]
const outputCurrency = GNO[chainId]

export const inputCurrencyInfoMock: CurrencyInfo = {
  field: Field.INPUT,
  isIndependent: false,
  receiveAmountInfo: {
    type: 'from',
    amountBeforeFees: '30',
    amountAfterFees: '20',
    amountAfterFeesRaw: CurrencyAmount.fromRawAmount(inputCurrency, 20 * 10 ** 18),
    feeAmount: '10',
    feeAmountRaw: CurrencyAmount.fromRawAmount(inputCurrency, 10 * 10 ** 18),
  },
  currency: inputCurrency,
  balance: CurrencyAmount.fromRawAmount(inputCurrency, 250 * 10 ** 18),
  amount: CurrencyAmount.fromRawAmount(inputCurrency, 20 * 10 ** 18),
  fiatAmount: CurrencyAmount.fromRawAmount(inputCurrency, 12 * 10 ** 18),
}

export const outputCurrencyInfoMock: CurrencyInfo = {
  field: Field.INPUT,
  isIndependent: false,
  receiveAmountInfo: {
    type: 'from',
    amountBeforeFees: '30',
    amountAfterFees: '20',
    amountAfterFeesRaw: CurrencyAmount.fromRawAmount(outputCurrency, 20 * 10 ** 18),
    feeAmount: '10',
    feeAmountRaw: CurrencyAmount.fromRawAmount(outputCurrency, 10 * 10 ** 18),
  },
  currency: outputCurrency,
  balance: CurrencyAmount.fromRawAmount(outputCurrency, 250 * 10 ** 18),
  amount: CurrencyAmount.fromRawAmount(outputCurrency, 20 * 10 ** 18),
  fiatAmount: CurrencyAmount.fromRawAmount(outputCurrency, 12 * 10 ** 18),
}

export const tradeContextMock: TradeFlowContext = {
  permitInfo: undefined,
  generatePermitHook: (() => void 0) as any,
  postOrderParams: {
    class: OrderClass.LIMIT,
    account: '0x000',
    chainId: 1,
    kind: OrderKind.SELL,
    inputAmount: inputCurrencyInfoMock.amount!,
    outputAmount: outputCurrencyInfoMock.amount!,
    sellAmountBeforeFee: inputCurrencyInfoMock.amount!,
    feeAmount: CurrencyAmount.fromRawAmount(outputCurrency, 10 * 10 ** 18),
    sellToken: inputCurrency,
    buyToken: outputCurrency,
    recipient: '0xaaa',
    recipientAddressOrName: null,
    allowsOffchainSigning: true,
    partiallyFillable: true,
    appData: getAppData(),
    featureFlags: { swapZeroFee: false },
    isSafeWallet: false,
  },
  rateImpact: 0,
  provider: {} as any,
  settlementContract: {} as any,
  chainId: 1,
  dispatch: (() => void 0) as any,
  allowsOffchainSigning: true,
}

export const priceImpactMock: PriceImpact = {
  priceImpact: new Percent(20000, 10),
  loading: false,
}
