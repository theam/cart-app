import { Projects, ReadModel } from '@boostercloud/framework-core'
import { ProjectionResult, UUID } from '@boostercloud/framework-types'
import { Product } from '../common/types/product'
import { Cart } from '../entities/cart'

@ReadModel({
  authorize: 'all',
})
export class CartReadModel {
  public constructor(public id: UUID, readonly products: Product[]) {}

  @Projects(Cart, 'id')
  static reduceCart(entity: Cart): ProjectionResult<CartReadModel> {
    return new CartReadModel(entity.id, entity.products)
  }
}
