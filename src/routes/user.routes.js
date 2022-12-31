import {Router} from 'express'
import express from 'express'



const router = express.Router()


// router.post('/api', (req,res) => {
//   const { name , mail , password } = req.body; 
//   let usuarioNuevo = {name:name,mail:mail,password:password}
//   console.log('Usuario agregado\n')
//   console.log(usuarioNuevo)

// })

router.get('/', (req,res)=> { 
 res.render('index')})

export default router;
