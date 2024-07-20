import { rest } from 'msw'

 const handlers = [
    rest.post('https://oauth2.googleapis.com/token', (req, res, ctx) => {
        return res(
            ctx.json({
                access_token: 'mocked_access_token',
                expires_in: 3600,
                id_token: 'mock-id-token',
                scope: 'alonngadea@gmail.com',
                token_type: 'Bearer'
            })
        )
    })
]

export default handlers;