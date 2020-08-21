// Types
import { RoutesOptionsType } from '../types/routes';

// Controllers
import { UserController } from '../controllers/user.controller';

export const routes = ({ app }: RoutesOptionsType) => {
  app.post('/api/user', async (req, res) => {
    const { firstName, lastName, email } = req.body;
    console.dir(req.body);
    const user = await UserController.createUser({
      firstName,
      lastName,
      email,
    });
    return res.send(user);
  });
};
