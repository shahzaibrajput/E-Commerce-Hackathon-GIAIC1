export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-24'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  'sk0hcGx2LIC9SsIkAL5bkcCYB8D87pAqwvYeUfXiBJFzMV6ttSll9I0Q1WVII0RXc2KcKp2KEjLx0EbY3qhXhmTi2IdI06GC9ohkcBtP5mTT0u4jHXZcQ1yy8dSFcWVy6IIxboXpe7ZN1dhfy3xJXBHwBq4tFSBTbqxsQMSENzoWOdeGfvgH',
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
