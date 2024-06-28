import exp from "constants"
import { JwToken } from "../../src/services"

interface DataInterface {
    token: string
}

describe('test suit in Json Web Token Service', () => {
    test('should return a valid token', async () => {
        const token = await JwToken.generateToken({user: 'axell'}) as DataInterface
        expect(token).toBeDefined()
        expect(typeof token).toBe('string')

    })
})