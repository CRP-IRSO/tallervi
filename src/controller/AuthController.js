import { Request, Response } from 'express'
import { User } from '../entity/User';

Class AuthController{
  static login = async (req: Request, res: Response) => {
    const{username, password} = req.body;

//Recibe las dos propiedadesd que necesitamos
    if( !(username && password)){
      res.status(400).json({message: 'Username & Password are required!'});
    }
    const userRepository = getRepository(User);
    let user: User;

    try{
      user = await userRepository.findOneOrFail({ where:{username: ussername}});
    } catch (e) {
      return res.status(400).json({message:' Username or password incorecct!'});
    }
    res.send(user);
  };
}
export default AuthController;
