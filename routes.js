const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.json(err)

        conn.query('select * from books', (err, rows) => {
            if(err) return res.json(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.json(err)        

       conn.query('insert into books set ? ', [req.body] ,(err, rows) => {
            if(err) return res.json(err)

            res.json("Libro insertado correctamente")
        })
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.json(err)        

       conn.query('delete from books where id = ? ', [req.params.id] ,(err, rows) => {
            if(err) return res.json(err)

            res.json("Libro eliminado correctamente")
        })
    })
})


routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.json(err)        

       conn.query('update books set ? where id= ? ', [req.body , req.params.id] ,(err, rows) => {
            if(err) return res.json(err)

            res.json("Libro actualizado correctamente")
        })
    })
})





module.exports = routes