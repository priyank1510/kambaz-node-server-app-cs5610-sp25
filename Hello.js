
export default function Hello(app) { // export function Hello with parameter app


    const hello =(req, res) =>  {// respond HTTP GET
        res.send("<h1> I am Iron man  </h2>")};      // "hello world"
       
    function home(req, res)  // respond HTTP GET   
        {// respond HTTP GET
           res.send(' Welcome to the Full Stack Development');  
        }

 app.get("/hello" , hello);
 app.get("/", home);
}