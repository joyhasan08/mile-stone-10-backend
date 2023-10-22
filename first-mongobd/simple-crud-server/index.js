const express = require("express");
const cors = require("cors");
// const registrationRoute = require("./routes/registration");
// const userRoute = require("./routes/user");
const app = express();
const port = process.env.PORT || 5000;

//middlewear 
app.use(express());
app.use(cors());
app.use(express.json());

// await connectDB();
//mongo//////////////////////////
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://rubayedhasan235:Assassin08@cluster0.s06odgh.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
      
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        //add to data mongo db
        const database = client.db("usersDB")
        const userCollaction = database.collection('users')
        //get method
        app.get('/users', async (req, res) => {
            const coursor = userCollaction.find()
            const result = await coursor.toArray()
            res.send(result)
        })
        //post method
        app.post("/users", async (req, res) => {
            const user = req.body;
            console.log('new user at ', user);
            const result = await userCollaction.insertOne(user);
            res.send(result)

        })
        //put method 
        app.get("/users/:id", async (req, res) => {
            const id = req.params.id
            const updatedUser = req.body;
            console.log(updatedUser, id);
            const query = { _id: new ObjectId(id) }
            const user = await userCollaction.findOne(query)
            res.send(user)

        })


        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id
            console.log('delete id', id);
            const query = { _id: new ObjectId(id) }
            const results = await userCollaction.deleteOne(query)
            res.send(results)
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



///////////////////////////////////////
app.get("/", (req, res) => {
    res.send("port in on")
})

app.listen(port, () => console.log("CURD Oparetion"))

// app.use("/api", registrationRoute);
// app.use('/api', userRoute)