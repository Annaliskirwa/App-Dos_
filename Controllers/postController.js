const Post = require('../models/Post')

exports.viewCreateScreen = function(req, res){
    res.render('create-post')
}

exports.create = function(req, res){
    let post = new Post(req.body, req.session.user._id)
    post.create().then(function(){
        res.send("New post has been created")

    }).catch(function(errors){
        res.send(errors)
    })
}
exports.viewSingle = async function(req, res){
    try{
        let post = await Post.findSingleById(req.params.id, req.visitorId)
        res.render('single-post-screen', {post: post})
    }catch{
        res.render('404')
    }
}
exports.viewEditScreen = async function(req, res){
   try {
    let post = await Post.findSingleById(req.params.id)
    res.render('edit-post', {post: post})
    }
   catch{
       res.render('404')
    }
}
exports.edit = function(res, req){
    let post = new Post(req.body, req.visitorId, req.params.id)
    post.update().then((status)=>{
        //if its the real owner of the post
        //if there are no validation errors 
        if (status == "success"){
            //post was updated in the database
            req.flash("success", "Post was succesfully added to the database")
        }else {
            post.errors.forEach(function(error){
                req.flash("errors", error)
            })
            req.session.save(function(){
                res.redirect(`/post/${req.params.id}/edit`)
            })

        }

    }).catch(()=>{
        // when the visitor is not the owner of the post to be edited
        req.flash("errors", "You do not have permission to perform that action")
        req.session.save(function(){
            res.redirect("/")
        })
    })
}