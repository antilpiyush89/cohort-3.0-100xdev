1. We should always have a different jwt password for admin and user auth, bcz what if coincidentally _id of both user and admin
is same, then if jwt password is also is same, then user can sign in as an admin, we have encode id:_id inside the token, hence we need diff jwt passwords

2. All the passwords, mongoose url and any apis etc, must be stored in an .env file, when we commit changes to repo on github, these passwords which are stored in .env are not commited, even the .env is not commited either

3. We store the demo/example password and urls inside .env.example, this file is commited to the github

4. We also make .gitignore file where we tell git that, whenever we commit changes don't commit changes which are made inside these files, ex- we will put node_modules and .env in this

5. npm install dotenv