# NodeJS---APIs-
Working on 26 API endpoints along with a database that stores information about courses offered in various countries and regions. Basic API endpoints in this project include authentication (Registration and User login), Image upload, and query based endpoints. Other endpoints are different from the basic ones

Run this code locally on port 5000 to test the following api endpoints: http://localhost:5000

Authentication:
  1. Register a User (/api/v1/auth/register)
  2. Login a User (/api/v1/auth/login)
  3. Get Logged User using cookies and token (/api/v1/auth/me)
  4. Forgot Password (/api/v1/auth/forgotpassword) (Using node-mailer)
  5. Reset Password (/api/v1/auth/resetpassword/:id) (Reset password by user) (id = reset password token from the email)
  6. Update user details (/api/v1/auth/updatedetails) (Admin access)
  7. Update Password (/api/v1/auth/updatepassword)
  8. Logout User (/api/v1/auth/logout)
  
Bootcamps:
  1. Get all bootcamps (/api/v1/bootcamps) (Also includes queries, pagination, sorting and filtering)
  2. Get single bootcamp by ID (/api/v1/bootcamps/:id)
  3. Create a new bootcamp (/api/v1/bootcamps) (Only users with access to create a bootcamp will be able to access this route)
  4. Update Bootcamp (/api/v1/bootcamps/:id) (Update bootcamp by ID)
  5. Delete Bootcamp (/api/v1/bootcamps/:id) (Delete bootcamps by ID)
  6. Get Bootcamps by Distance (/api/v1/bootcamps/radius/:pincode/:radius) (Filter bootcamps based on pincode and radius) (Using GeoJSON points, mapquesst)
  7. Upload photo for bootcamps (/api/v1/bootcamps/:id) (Upload photo to a particular bootcamp based on bootcamp ID)
  
Course:
  1. Get all courses (/api/v1/courses) (Also includes queries, pagination, sorting and filtering)
  2. Get courses for a particular bootcamp (/api/v1/bootcamps/:bootcampId)
  3. Get a single course based on ID (/api/v1/courses/:id)
  4. Create course (/api/v1/bootcamps/:id/courses) (Create courses under a bootcamp. Courses can only be created if a related bootcamp exists)
  5. Update course (/api/v1/course/:id) (Update courses by course ID. Route only available to the user who created the course. Role: Publisher)
  6. Delete course (/api/v1/course/:id) (Delete course by course ID. Route available to both admin and user with role: Publisher)
  
Admin Controls (Routes available for access only to the admin):
  1. Get all users (/api/v1/users)
  2. Get single user (/api/v1/users/:id) (Get users based on user id)
  3. Create User (/api/v1/users) 
  4. Update User (/api/v1/users/:id)
  5. Delete User (/api/v1/users/:id) (Delete user by ID)
