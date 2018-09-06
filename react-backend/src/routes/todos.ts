import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './route';
import { create, getById, list } from '../../server/controllers/todos';

/**
 * / route
 *
 * @class TodosRoute
 */
export class TodosRoute extends BaseRoute {
  /**
   * Create the routes.
   *
   * @class TodosRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log('[Todos::create] Creating todos route.');

    router.get(
      '/todos/list',
      (req: Request, res: Response, next: NextFunction) => {
        new TodosRoute().listTodos(req, res, next);
      }
    );
    router.get(
      '/todos/:todoId',
      (req: Request, res: Response, next: NextFunction) => {
        new TodosRoute().getTodo(req, res, next);
      }
    );
    router.get('/todos', (req: Request, res: Response, next: NextFunction) => {
      new TodosRoute().index(req, res, next);
    });

    router.post('/todos', (req: Request, res: Response, next: NextFunction) => {
      new TodosRoute().postTodo(req, res, next);
    });
  }

  /**
   * Constructor
   *
   * @class TodosRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * The users page route.
   *
   * @class UsersRoute
   * @method users
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public index(req: Request, res: Response, next: NextFunction) {
    //set custom title
    this.title = 'Todos Route';

    //set message
    let options: Object = {
      message: 'Activating Todos route test'
    };

    //render template
    this.render(req, res, 'todos', options);
  }

  //GET
  public getTodo(req: Request, res: Response, next: NextFunction) {
    getById(req, res)
      .then((todo: any) => {
        if (!todo) {
          return res.status(404).send({
            message: 'Todo Not Found'
          });
        }
        return res.status(200).send(todo);
      })
      .catch((error: any) => res.status(400).send(error));
  }

  public listTodos(req: Request, res: Response, next: NextFunction) {
    list(req, res)
      .then((todos: any) => {
        console.log('response sent');
        res.status(200).send(todos);
      })
      .catch((error: any) => res.status(400).send(error));
  }

  //POST
  public postTodo(req: Request, res: Response, next: NextFunction) {
    create(req.body)
      .then((data: any) => {
        res.send(data.dataValues);
      })
      .catch((error: any) => {
        return error;
      });
  }
}
