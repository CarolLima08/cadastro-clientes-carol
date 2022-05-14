module.exports = function (app) {
    app.get("/login", function(req, res){
        if (req.query.fail)
        res.render('usuario/Login', { mensagemlogin:
            'usuário e/ou senha incorretos!'});
        else
        res.render('usuario/Login', { mensagemlogin: null});
    })
    
app.post('/login/execuatr', (req, res) => {
    if(req.body.nome === "Carolina"
    && req.body.senha === "123456789")
    res.render('/lista/usuario', { mensagem: 'cadastrado'});
    else
     res.render('/login/?fail=true');
     });
}