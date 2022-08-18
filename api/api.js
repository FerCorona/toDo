const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();
const { Pool } = require('pg');

const service = require('./services');
const middleware = require('./middleware');
const config = require('./config');


const keys = require('./keys');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


const PORT = 1998;
const HOST = '0.0.0.0';

 const pgClient = new Pool({
   user: keys.pgUser,
   host: keys.pgHost,
   database: keys.pgDatabase,
   password: keys.pgPassword,
   port: keys.pgPort
 });


router.get('/saludo', (req, res) => {
  pgClient
  .query('SELECT id_nota, nombre_nota, desc_nota, id_estado_nota, id_lista, fecha FROM public.nota')
  .then(data => res.send(data.rows))
  .catch(e => res.send(e.stack))
});

router.post('/getNotesByList', (req, res) => {
  const dataFormated = {};
  pgClient
  .query('SELECT L.id_lista, L.nombre_lista, N.id_nota, N.nombre_nota, N.desc_nota, N.fecha, E.nombre_estado, E.id_estado_nota ' +
	'FROM public.lista as L LEFT JOIN public.nota AS N ' +
	'ON N.id_lista = L.id_lista ' +
	'LEFT JOIN public.estado_nota as E ' +
	'ON N.id_estado_nota = E.id_estado_nota ')
  .then(data => {
    data.rows.forEach(row => {
      dataFormated[row.id_lista] = {
        ...dataFormated[row.id_lista],
        nombre_lista: row.nombre_lista,
      };
      const nota = {
        id_nota: row.id_nota,
        nombre_nota: row.nombre_nota,
        desc_nota: row.desc_nota,
        nombre_estado: row.nombre_estado,
        id_estado_nota: row.id_estado_nota,
        fecha: row.fecha,
      };
      if (!!dataFormated[row.id_lista].notas) {
        dataFormated[row.id_lista].notas.push(nota);
      }
      else if (nota.id_nota) {
        dataFormated[row.id_lista].notas = [ nota ];
      } else {
        dataFormated[row.id_lista].notas = [];
      }
    });
    res.send(dataFormated)
  })
  .catch(e => res.send(e.stack));
});

router.get('/getList', (req, res) => {
  pgClient
  .query('SELECT * FROM public.lista')
  .then(data => {
    res.send(data.rows)
  })
  .catch(e => res.send(e.stack));
});

router.put('/updateList', (req, res) => {
  const { id_lista, nombre_lista } = req.body;
  console.log(`UPDATE public.lista SET nombre_lista='${id_lista}' WHERE id_lista=${nombre_lista}`)
  pgClient
  .query(`UPDATE public.lista SET nombre_lista='${nombre_lista}' WHERE id_lista=${id_lista}`)
  .then(data => {
    res.send({ status: data });
  })
  .catch(e => res.send(e.stack));
});

router.put('/updateNote', (req, res) => {
  const { id_nota, nombre_nota, desc_nota, id_estado_nota, fecha } = req.body;
  let query = `UPDATE public.nota SET nombre_nota='${nombre_nota}', desc_nota='${desc_nota}', id_estado_nota=${id_estado_nota} WHERE id_nota=${id_nota}`;
  if (!nombre_nota && !desc_nota && !fecha) {
    query = `UPDATE public.nota SET id_estado_nota=${id_estado_nota} WHERE id_nota=${id_nota}`;
  }
  console.log(query)
  pgClient
  .query(query)
  .then(data => {
    res.send({ status: data });
  })
  .catch(e => res.send(e.stack));
});

router.post('/addList', (req, res) => {
  const { nombre_lista } = req.body;
  console.log(`INSERT INTO public.lista(nombre_lista) VALUES ('${nombre_lista}')`)
  pgClient
  .query(`INSERT INTO public.lista(nombre_lista) VALUES ('${nombre_lista}')`)
  .then(data => {
    res.send({ status: data });
  })
  .catch(e => res.send(e.stack));
});

router.post('/addNote', (req, res) => {
  const { id_lista } = req.body;
  pgClient
  .query(`INSERT INTO public.nota(nombre_nota, desc_nota, id_estado_nota, id_lista, fecha) VALUES ('Nombre task', 'Desc task', 1, ${id_lista}, NOW())`)
  .then(data => {
    res.send({ status: data });
  })
  .catch(e => res.send(e.stack));
});

router.post('/deleteNote', (req, res) => {
  const { id_nota } = req.body;
  console.log(`DELETE FROM public.nota WHERE id_nota=${id_nota}`)
  pgClient
  .query(`DELETE FROM public.nota WHERE id_nota=${id_nota}`)
  .then(data => {
    res.send({ status: data });
  })
  .catch(e => res.send(e.stack));
});

router.post('/deleteList', (req, res) => {
  const { id_list } = req.body;
  console.log(`DELETE FROM public.lista WHERE id_lista=${id_list}`)
  pgClient
  .query(`DELETE FROM public.lista WHERE id_lista=${id_list}`)
  .then(data => {
    res.send({ status: data });
  })
  .catch(e => res.send(e.stack));
});



// USE MIDDLEWARE
app.get('/prueba', middleware.ensureAuthenticated, (req, res) => {

});

app.listen(PORT,HOST, () => console.log('Server Running.....'));