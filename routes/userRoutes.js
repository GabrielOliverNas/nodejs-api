const express = require('express');
const router = express.Router();
const controller = require ('../controllers/userController')


/**
 * @swagger
 * /users:
 *   get:
 *     summary: "Listar todos os usuários"
 *     description: "Este endpoint retorna uma lista de todos os usuários cadastrados."
 *     responses:
 *       200:
 *         description: Uma lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   email:
 *                     type: string
 *                   idade:
 *                     type: integer
 */
router.get('/', controller.listarUsuarios);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: "Buscar usuário por ID"
 *     description: "Este endpoint retorna um usuário específico baseado no ID fornecido."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalhes do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 email:
 *                   type: string
 *                 idade:
 *                   type: integer
 *       400:
 *         description: Usuário não encontrado
 */
router.get('/:id', controller.listarUsuarioPorId);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: "Inserir um novo usuário"
 *     description: "Este endpoint permite adicionar um novo usuário ao sistema."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                nome:
 *                  type: string
 *                email:
 *                  type: string
 *                idade:
 *                  type: integer
 *             required:
 *               - nome
 *               - email
 *               - idade
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  _id:
 *                     type: integer
 *                  nome:
 *                     type: string
 *                  email:
 *                     type: string
 *                  idade:
 *                     type: integer
 */
router.post('/', controller.inserirUsuario);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: "Deletar usuário por ID"
 *     description: "Este endpoint permite deletar um usuário específico baseado no ID fornecido."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser deletado
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/:id', controller.deletarUsuarioPorId);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: "Alterar informações do usuário"
 *     description: "Este endpoint permite atualizar as informações de um usuário específico baseado no ID fornecido."
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do usuário a ser alterado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.put('/:id', controller.alterarUsuarioPorid);

module.exports = router;