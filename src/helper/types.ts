// Note that nextjs only support production, development, test. Their ideology is production -> run build, development -> run dev
// However in our usecase, production and staging is indeed running build. So we have to employ env-cmd to help us with the env file
// https://stackoverflow.com/questions/59462614/how-to-use-different-env-files-with-nextjs
export type TEnv = 'production' | 'staging' | 'development'
