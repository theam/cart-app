import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { Product } from '../common/types/product'
import { ItemAddedToCart } from '../events/item-added-to-cart'

@Entity
export class Cart {
  public constructor(public id: UUID, readonly products: Product[]) {}

  @Reduces(ItemAddedToCart)
  static reduceItemAddedToCart(event: ItemAddedToCart, current: Cart): Cart {
    const itemsOnCart = current?.products || []
    return new Cart(event.cartId, [...itemsOnCart, { productName: event.productName, quantity: event.quantity }])
  }
}
