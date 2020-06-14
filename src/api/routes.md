All requests (except create user?) must be accompanied by a valid token (use middleware to validate)

# USERS
POST        /users                  create user
GET         /user                   read user
PATCH       /user                   update user
DELETE      /user                   delete user

# MOODS
GET         /moods/options          get mood options
POST        /moods                  add mood to user's moods
GET         /moods                  get user's moods (paginated)
PATCH       /moods/:id              update mood (24-hour time limit)
DELETE      /moods/:id              delete mood (24-hour time limit)

# FRIENDS
GET         /friends                get user's friends
POST        /friends/:id            add friend to user's friends
GET         /friends/:id            (?) get friend of user
PATCH       /friends/:id            update settings for friend
DELETE      /friends/:id            delete friend from user's friends
GET         /friends/:id/hugs       get hugs given to or received from friend

# HUGS
GET         /hugs/templates         get hug templates (including user's templates)
POST        /hugs/templates         add template to user's hugs
GET         /hugs                   (?) get all hugs (given and received)
POST        /hugs                   send a hug
GET         /hugs/received          get user's received hugs (from all friends)
GET         /hugs/given             (?) get user's given hugs (to all friends)