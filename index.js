const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')// masang view engine hbs
app.use('/assets', express.static(__dirname + '/assets')) // path folder assets
app.use(express.urlencoded({extended: false}))

app.get('/', function(request, response){
    response.render('index')
})

// let dataBlog = []
// let isLogin = true
app.get('/add-project', function(request, response){
    response.render('add-project',{isLogin})
})

app.get('/add-project', function(request,response){
    response.render('add-project')
})

app.post('/add-project', function(request,response){
    console.log(request.body);

    let title = request.body.inputName
    let sdate = request.body.starDate
    let edate = request.body.endDate
    let descript = request.body.inputDescription
    let checknodejs = request.body.inputNode
    let checkreactjs = request.body.inputReact
    let checknextjs = request.body.inputNext
    let checkts = request.body.inputTS
    let image = request.body.inputImage

    console.log(title);
    console.log(sdate);
    console.log(edate);
    console.log(descript);
    console.log(checknodejs);
    console.log(checkreactjs);
    console.log(checknextjs);
    console.log(checkts);
    console.log(image);

    response.redirect('/')
})


app.get('/project-detail', function(request, response){
    // let paramna = request.params.id
    // console.log(paramna);
    response.render('project-detail',{
        title: 'Serangan siber dari siberia',
        content: 'lorem ipsum, cek cek cek...',
        author: 'Muhalkarr',
        distance: '18 - 24 Agustus 2022',
        duration: '4 Days'        
    })
})

app.get('/contact-me', function(request, response){
    response.render('contact')
})

app.listen(port, function(){
    console.log(`Server run on port ${port}`);
})
