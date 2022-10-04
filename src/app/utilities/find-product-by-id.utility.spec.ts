import { findProductById } from './find-product-by-id.utility'

describe('findProductById', () => {
    it('should be a function', () => {
        expect(typeof findProductById).toBe('function')
    })
})
