const { Pool } = require ('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: "root",
  database: "root",
  port:'5432'
})
/*metodos get*/
const getCategories = async (req,res) => {
 const response = await pool.query('SELECT * FROM categorias')
 res.status(200).json(response.rows)
}
const getExistCorreo = async (req,res) => {
    console.log(req.params)
    const response = await pool.query(`SELECT * FROM usuarios WHERE correo = '${req.params.email}'`)
    res.status(200).json(response.rows)
   }

/*metodos post*/   
const postNewUsers = async(req,res)=>{
    /*const {username,nombres,apellidos,telefono,correo,contraseña}=req.body*/
    console.log(req.body)
    const response = await pool.query(`INSERT INTO usuarios( activo, username, nombre, apellido, "contraseña", telefono, correo) VALUES (true, '${req.body.userName}', '${req.body.nombre}','${req.body.apellido}','${req.body.password}','${req.body.telefono}','${req.body.correo}');`)
     res.status(200).json("Usuario Creado")
}
module.exports = {
    getCategories,
    getExistCorreo,
    postNewUsers
}