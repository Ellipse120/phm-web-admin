import { createServer } from 'miragejs'

const customResponseCode = {
  success: 20000
}

export function makeServer ({ environment = 'development' } = {}) {
  const server = createServer({
    environment,
    seeds (server) {
      server.db.loadData({
        todos: [
          { text: 'Buy groceries', isDone: false },
          { text: 'Walk the dog', isDone: true },
          { text: 'Do laundry', isDone: false }
        ],
        items: [
          {
            title: 'test',
            status: 'published',
            author: 'admin',
            display_time: new Date(),
            pageviews: 1234
          },
          {
            title: 'test',
            status: 'draft',
            author: 'admin',
            display_time: new Date(),
            pageviews: 12
          },
          {
            title: 'hello',
            status: 'deleted',
            author: 'admin',
            display_time: new Date(),
            pageviews: 12
          }
        ]
      })
    },
    routes () {
      this.namespace = 'dev-api'
      // this.timing = 750

      this.get('/todos', ({ db }) => {
        return {
          code: customResponseCode.success,
          data: db.todos
        }
      })

      this.patch('/todos/:id', (schema, request) => {
        const todo = JSON.parse(request.requestBody)
        return schema.db.todos.update(todo.id, todo)
      })

      this.post('/todos', (schema, request) => {
        const todo = JSON.parse(request.requestBody)
        return {
          code: customResponseCode.success,
          data: schema.db.todos.insert(todo)
        }
      })

      this.delete('/todos/:id', (schema, request) => {
        return {
          code: customResponseCode.success,
          data: schema.db.todos.remove(request.params.id)
        }
      })

      this.post('/user/login', (schema, request) => {
        return {
          code: customResponseCode.success,
          data: 'admin-token'
        }
      })

      this.get('/user/info', () => {
        return {
          code: customResponseCode.success,
          data: {
            name: 'admin',
            roles: ['admin']
          }
        }
      })

      this.get('/table/list', ({ db }) => {
        return {
          code: customResponseCode.success,
          data: {
            total: db.items.length,
            items: db.items
          }
        }
      })
    }
  })

  window.server = server
  return server
}
