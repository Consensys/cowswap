import ms from 'ms.macro'

import { TradeType } from '../trade'

export const ORDER_TYPE_SUPPORTS_PERMIT: Record<TradeType, boolean> = {
  [TradeType.SWAP]: true,
  [TradeType.LIMIT_ORDER]: true,
  [TradeType.ADVANCED_ORDERS]: false,
}

export const PENDING_ORDER_PERMIT_CHECK_INTERVAL = ms`60s`

export const PRE_GENERATED_PERMIT_URL =
  'https://raw.githubusercontent.com/cowprotocol/token-lists/main/src/public/PermitInfo'
