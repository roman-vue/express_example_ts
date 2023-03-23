import {Request, Response} from 'express'
export class ExampleServices {
    
    public static async example(req: Request, res: Response) {
       try{
           res.status(200).json({data: 'example services'})
       }catch(err){
         res.status(500).json({err})
       }
    }
  
}
