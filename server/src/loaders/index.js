import expressLoader from './expressLoader'
export default async ({ config }) => {
  const app = expressLoader({ config })
  return app
}