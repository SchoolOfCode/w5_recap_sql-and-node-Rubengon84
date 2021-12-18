// Create credentials variables and assing to the envairoment variobles
export const host = process.env.DB_HOST
export const database = process.env.DB_DATABASE
export const user = process.env.DB_USER
export const password = process.env.DB_PASS
export const port = process.env.DB_PORT

/*
To make it work, create a .env file in the root with the variables below.

DB_HOST=(Your host credentials)
DB_DATABASE=(Your database credentials)
DB_USER=(Your user credentials)
DB_PASS=(Your password credentials)
DB_PORT=(your port credentials)

*/