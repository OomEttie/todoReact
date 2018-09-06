import { NextFunction, Request, Response, Router } from 'express';
import { BaseRoute } from './route';
import { create, list, listByTodoId } from '../../server/controllers/todoItem';

/**
 * / route
 *
 * @class TodoItemsRoute
 */
export class TodoItemsRoute extends BaseRoute {
  /**
   * Create the routes.
   *
   * @class TodoItemsRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    //log
    console.log('[TodoItems::create] Creating todoitems route.');

    router.get(
      '/todoitems/listByTodoId/:todoId',
      (req: Request, res: Response, next: NextFunction) => {
        new TodoItemsRoute().listTodosItemsByTodoId(req, res, next);
      }
    );
    router.get(
      '/todoitems/list',
      (req: Request, res: Response, next: NextFunction) => {
        new TodoItemsRoute().listTodosItems(req, res, next);
      }
    );
    router.get(
      '/todoitems',
      (req: Request, res: Response, next: NextFunction) => {
        new TodoItemsRoute().index(req, res, next);
      }
    );

    router.post(
      '/todoitems/:todoId',
      (req: Request, res: Response, next: NextFunction) => {
        new TodoItemsRoute().postTodoItems(req, res, next);
      }
    );
  }

  /**
   * Constructor
   *
   * @class TodoItemsRoute
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
    this.title = 'TodoItems Route';

    //set message
    let options: Object = {
      message: 'Activating TodoItems route test'
    };

    //render template
    this.render(req, res, 'todos', options);
  }

  //GET
  public listTodosItems(req: Request, res: Response, next: NextFunction) {
    list(req, res)
      .then((todoitems: any) => res.status(200).send(todoitems))
      .catch((error: any) => res.status(400).send(error));
  }
  public listTodosItemsByTodoId(req: Request, res: Response, next: NextFunction) {
    listByTodoId(req.params.todoId)
      .then((todoitems: any) => res.status(200).send(todoitems))
      .catch((error: any) => res.status(400).send(error));
  }

  //POST
  public postTodoItems(req: Request, res: Response, next: NextFunction) {
    create(req.params.todoId, req.body.content)
      .then((data: any) => {
        res.send(data.dataValues);
      })
      .catch((error: any) => {
        return error;
      });
  }
}
