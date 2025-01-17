import { BigDecimal, BigInt } from '@graphprotocol/graph-ts'

// ... addresses ...
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// ... numbers ...
export const ONE_BI = BigInt.fromI32(1)
export const ZERO_BI = BigInt.fromI32(0)
export const ZERO_BD = BigDecimal.fromString('0')

// ... transactions ...
// wasm/assemblyscript can't compile objects nor enum
// so we must set these separately

export const EVENTS_TRANSFER = 'TRANSFER'
export const EVENTS_SWAP = 'SWAP'

export const ACTIONS_SEND = 'SEND'
export const ACTIONS_RECEIVE = 'RECEIVE'
export const ACTIONS_OPEN = 'OPEN'
export const ACTIONS_CLOSE = 'CLOSE'

// ... token types ...
export const TOKEN_TYPE_COLLATERAL = 'COLLATERAL'
export const TOKEN_TYPE_LONG_SHORT = 'LONG_SHORT'
export const TOKEN_TYPE_COLLATERAL_BASE = 'COLLATERAL_BASE'

export class HistoricalEventTypes {
  deposit: string = 'DEPOSIT'
  withdraw: string = 'WITHDRAW'
  open: string = 'OPEN'
  close: string = 'CLOSE'
}
