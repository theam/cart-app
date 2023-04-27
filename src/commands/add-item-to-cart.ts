import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { ItemAddedToCart } from '../events/item-added-to-cart'

@Command({
  authorize: 'all',
})
export class AddItemToCart {
  public constructor(readonly cartId: UUID, readonly productName: string, readonly quantity: number) {}

  public static async handle(command: AddItemToCart, register: Register): Promise<void> {
    if (command.quantity <= 0) {
      throw new Error('Quantity must be positive')
    }
    register.events(new ItemAddedToCart(UUID.generate(), command.cartId, command.productName, command.quantity))
  }
}
