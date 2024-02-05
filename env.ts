import { z } from 'zod'

const envConfigSchema = z.object({
  envModel: z.enum(['development', 'production']),
  port: z.number()
})

const processEnv = {
  envModel: process.env.NODE_ENV,
  port: Number(process.env.PORT)
}

const envConfig = envConfigSchema.safeParse(processEnv)

if (envConfig.success === false) {
  console.error('❌ Invalid environment variables:', envConfig.error.flatten().fieldErrors)
  throw new Error('Invalid environment variables')
}

export default envConfig.data
