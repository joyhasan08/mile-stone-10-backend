/**
 * ##server side##
 * 
 * mongoDB COnnction
 * -----------------------------
 * 1.creat account
 * 2.got to database . connect .driver .node .show_full_code
 * 3.**impotent** chang the password in the uri  
 * -----------------------------
 * 1. Creat  - POSt oparetion
 * 2. app .post() app.get app.delete  // app = express();
 * 3. must user middel ware =>
 {
 * app.use(express());
 * app.use(cors());
 * app.use(express.json());
 }
 * 4. function must async and await
 * 5. access data from body // req.body 
 * 6. //add to data mongo db
        const database = client.db("usersDB")
        const userCollation = database.collection('users')
 * 7. res.send (result)      
 * 8. impotent 
        app.listen(port, () => console.log("CURD Oparetion"))
 * 
 */

