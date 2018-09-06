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
    getById(req, res);
  }

  public listTodos(req: Request, res: Response, next: NextFunction) {
    list(req, res);
    // list()
    //   .then((data: any) => {
    //     // const result = data.map((item: any) => {
    //     //   return item.dataValues;
    //     // });
    //     // res.send(result);
    //     res.send(data);
    //   })
    //   .catch((error: any) => {
    //     return error;
    //   });
  }

  //POST
  public postTodo(req: Request, res: Response, next: NextFunction) {
    create(req.body.content)
      .then((data: any) => {
        res.send(data.dataValues);
      })
      .catch((error: any) => {
        return error;
      });
  }
}
