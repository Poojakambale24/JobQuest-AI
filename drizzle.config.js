/** @type {import("drizzle-kit").Config} */
export default{
    schema: "./utils/schema.js",
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:pQti1EJSel2z@ep-rapid-mouse-a42xj6ug.us-east-1.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
}