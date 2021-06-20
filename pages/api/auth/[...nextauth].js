import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import mysql from '../../../providers/mysql'

const options = {

    providers: [
        Providers.Credentials({
          name: 'Credentials',
          credentials: {
            username: { label: "uname", type: "text" },
            password: {  label: "password", type: "password" }
          },

          async authorize(credentials, req) {
            try {
              const { id, uname, password } = credentials;
              const user = {  name: uname, password: password}
         
              const data = await mysql.query(`SELECT uname, password FROM users WHERE  uname ='${uname}' && password ='${password}'`)

              if (data) {
                return user
             
              } else {
                
                return null
              }
            } catch (error) {
              console.log(error);
            }
          }
        })
      ],
      // callbacks: {
      //   async redirect(url, baseUrl) {
      //     return '/landing'
      //   },
      // }
 }

 
export default (req, res) => NextAuth(req, res, options); 