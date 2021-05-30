import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import mysql from '../../../providers/mysql'
import axios from 'axios';

const options = {

    providers: [
        Providers.Credentials({
          name: 'Credentials',
          credentials: {
            username: { label: "Username", type: "text" },
            password: {  label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            try {
              const { username, password } = credentials;
              const user = { id: 1, name: username, email: username }
         
              const data = await mysql.query(`SELECT username, password FROM users WHERE username ='${username}' && password ='${password}'`)

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
      callbacks: {
        async redirect(url, baseUrl) {
          return '/landing'
        },
      }
 }

 
export default (req, res) => NextAuth(req, res, options); 