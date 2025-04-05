# BLOG_APPLICATION PROJECT

/test  ->make a API for testing 

/seed -> seeding some data


--/api/user  (user)

  -POST   /signup   ->  create the user account
  -POST   /activate ->  activate the user account
  -GET    /profile  ->  get the user account
  -DELETE /:id      ->  delete the user account
  -PUT    /:id      ->  update the user account
  -PUT    /update-password/:id   -> update the password
  -POST    /forget-password/:id   -> forgate the password
  -PUT    /reset-password/:id   -> reset the password
  -PUT    Admin   /ban/:id  -> ban the user
  -GET    Admin   /unban/:id  -> unban the user
  -GET    Admin   /all-users  -> get all users including search & pagination
 
  
--api/auth  (JWT Auth)
  
   -POST /login ->isLoggedIn ->user login
   -POST /logout ->isLoggedOut ->user login
   -GET /refresh ->get refresh token


--Middleware

  -isLoggedIn
  -isLoggedOut
  -isAdmin
  -uploadFile
  -getRefreshToken
  -userValidation
  -runValidation
  
--/api/blogs   (CRUD)
  
  -POST / -> create the blog (Admin)
  -GET / -> get all the blogs  
  -GET /:id -> get a single blogs
  -PUT /:id -> update the particular blogs (Admin)
  -DELETE /:id -> Delete the blogs (Admin)


--package that will need to install in terminal on vscode before moving on work

` npm install express nodemon cors http-errors multer body-parser bcrypt jsonwebtokken cookie-parser  mongoose`

