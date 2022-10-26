// jshint:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require("lodash")


const homeStartingContent = " inventore quo nobis esse alias, voluptatum maxime. Beatae distinctio laboriosam quis commodi animi tempore dolores omnis eos odio dicta, labore neque possimus numquam qui aliquid nam temporibus dolorem harum rerum aspernatur repudiandae? Molestiae explicabo labore possimus nesciunt voluptatem veniam, temporibus assumenda aut aperiam asperiores nemo non maiores dolorem voluptatum modi. Dolorem laudantium itaque fugit autem aliquid aliquam sequi amet a expedita voluptate! Voluptate labore magni autem, harum ipsam quasi minima quidem et recusandae obcaecati quo eum tempore! Eligendi vitae vero tenetur modi sunt officiis aut, ex dolor quis!";
const aboutContent = "Molestiae maiores voluptatibus eos aliquam? Incidunt, ab nihil porro ipsam accusantium vel rerum, eveniet sed quibusdam, sapiente quos cumque magni. Assumenda quas dolor eos fugit nulla quibusdam voluptas maiores perspiciatis eum voluptates ab,  inventore quo nobis esse alias, voluptatum maxime. Beatae distinctio laboriosam quis commodi animi tempore dolores omnis eos odio dicta, labore neque possimus numquam qui aliquid nam temporibus dolorem harum rerum aspernatur repudiandae? Molestiae explicabo labore possimus nesciunt voluptatem veniam, temporibus assumenda aut aperiam asperiores nemo non maiores dolorem voluptatum modi.";
const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maiores ut sed tempora quasi dolor placeat possimus porro, voluptatibus eos aliquam? Incidunt, ab nihil porro ipsam accusantium vel rerum, eveniet sed quibusdam, sapiente quos cumque magni. Assumenda quas dolor eos fugit nulla quibusdam voluptas maiores perspiciatis eum voluptates ab, iste alias pariatur eveniet deserunt repellat, consectetur quia! Ipsa provident modi ex dignissimos beatae vitae, suscipit nostrum nam enim! Error, assumenda cum. Iste voluptas sapiente totam est voluptatum impedit at numquam laudantium! Expedita earum tenetur autem, repudiandae illum quaerat unde fuga quam. Fugit blanditiis nihil molestiae exercitationem corporis mollitia sequi eligendi maiores explicabo nesciunt laboriosam voluptatibus voluptates recusandae repellendus vero sint, porro eum, inventore quo nobis esse alias, voluptatum maxime. Beatae distinctio laboriosam quis commodi animi tempore dolores omnis eos odio dicta, labore neque possimus numquam qui aliquid nam temporibus dolorem harum rerum aspernatur repudiandae? Molestiae explicabo labore possimus nesciunt voluptatem veniam, temporibus assumenda aut aperiam asperiores nemo non maiores dolorem voluptatum modi. Dolorem laudantium itaque fugit autem aliquid aliquam sequi amet a expedita voluptate! Voluptate labore magni autem, harum ipsam !";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts = [];





// home
app.get("/", function(req, res){
    res.render("home", {
    homeStartingContent: homeStartingContent, posts:posts});
});
// about
app.get("/about", function(req, res){
    res.render("about", {aboutContent:aboutContent})
});
// contact
app.get("/contact", function(req, res){
    res.render("contact", {contactContent:contactContent})
});
// compose
app.get("/compose", function(req, res){
    res.render("compose", {contactContent:contactContent});
});

app.post("/compose", function(req, res){
    const post = {
        title : req.body.postTitle,
        content : req.body.postBody
    };
    posts.push(post);
    res.redirect("/");
});

app.get("/posts/:postName", function(req, res){
    // const requestedTitle = _.lowerCase(req.params.postName);
    const requestedTitle = req.params.postName;

    posts.forEach(function(post){
        // const storedTitle = _.lowerCase(post.title);
        const storedTitle = post.title;

        if(storedTitle === requestedTitle){
            res.render("post",{
                title: post.title,
                content: post.content
            });
        }
    });
});

app.listen(3000, function(){
    console.log("Server started on port 3000!")
});