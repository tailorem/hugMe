# users
id (PK)
username
email
average_mood
password
token

# friends
friend_id (FK)
user_id (FK)
allow_notifications
show_moods

# hugs
id (PK)
sender (FK)
recipient (FK)
image
message
created_at
read_at ?

# templates
id (PK)
image
default_message

# moods
id (PK)
mood_id (FK)
created_at

# mood_options
id (PK)
image
mood_name
mood_rating
