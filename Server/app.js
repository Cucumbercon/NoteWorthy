const users = require('./routes/api/users'); // add this line
const documents = require('./routes/api/documents');

//Connect Database
app.use(cors({ origin: true, credentials: true}));
app.use(express.json({ extended: false}));
app.use('/api/users', users); // add this line
app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/documents', documents);

const conn_str = 'mongodb+srv://noteworthyadmin:noteworthy123@noteworthydb.y3xclix.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});
