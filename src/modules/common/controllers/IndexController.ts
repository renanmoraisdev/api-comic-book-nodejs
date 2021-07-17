import { Request, Response } from 'express';

class IndexController {
  public async index(_request: Request, response: Response): Promise<Response> {
    return response.json({
      project: 'API Comic Book',
      version: '1.0.0',
      license: 'MIT',
      author: {
        name: 'Renan Morais',
        email: 'renankabum@gmail.com',
      },
    });
  }
}

const commonIndexController = new IndexController();
export default commonIndexController;
