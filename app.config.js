const __DEV = Object.is(process.env.NODE_ENV, 'production')

export const baseURL = __DEV ? 'https://apitest.vaffle.com' : 'https://api.vaffle.com'
export const timeout = 60000