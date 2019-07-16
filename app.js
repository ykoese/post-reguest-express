const express= require('express');
const app= express();
const port= process.env.PORT ||8001;
const bodyParser= require('body-parser');
app.set('view engine', 'ejs');//ejs eklendi
app.use(bodyParser.urlencoded({extended:true}));

var friends=['mrt', 'lily', 'monik', 'ali', 'hüso'];
//below root route
app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/friends', (req, res)=>{
    /* var friends=['mrt', 'lily', 'monik', 'ali', 'hüso'] */
    /* database kullanmadigimiz icin bu variable yeni isimler eklmemek icin golbal variable yapmamiz gerekiyo
    bu nedenle burdan cikarcaz localhost serverini kpatinca gidiyor kayboluyor*/
    res.render('friends', {friends:friends});
});

app.post('/addfriends', (req, res)=>{
    var newFriend=req.body.newfriend;
    friends.push(newFriend);
    /* req.body is an object that will contain all of the data from the request body */
    /* req.body undefined olur js objecte cevrilmesi lazim bunun icin body-parser install etmen lazim 
    Pretty much anytime we have a form that a user enters data into that we want to extract the data from

       on the server side. We need to use body parser.
       So Buddy parser took the request body and parsed it into a javascript object which has 
       new friend is equal to Linda or bob whatever you send.
       So what we actually want to do is request up body datt new friend.

And that will give us the value of whatever was inside the form.

And remember new friend is because of the name property the name attribute that we set on the input

whatever we put here is what we would need to look it up by inside of the route.
       
       */
    /* res.send('this is post route'); */// bunu kullaninca addfriende geliyoz tekrar friends dönüyoriz bu nedenle res.redirect kullanmaliyiz
    res.redirect('/friends');
});


app.listen(port, function(){
    console.log(`server started on ${port}`);
})