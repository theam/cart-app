import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class ItemAddedToCart {
  public constructor(
    readonly id: UUID,
    readonly cartId: UUID,
    readonly productName: string,
    readonly quantity: number
  ) {}

  public entityID(): UUID {
    return this.cartId
  }
}
