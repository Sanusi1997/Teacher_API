### **A REST API for Collecting Teacher's data and run with Node, Express and MongoDB** ###

**Project has the following CRUD Operations**
    
 **Create(_POST_)**
      Allows users to create a new teacher. 

   **Read(_GET_)**
      Allows users to get a teacher with an ID or all available teachers in the database.  

   **Update(_PATCH_)**
      Allows users to update a teacher's deatails gotten by ID without destroying previous details.

   **Delete(_Destroy_)**
      Allows users to  delete a teacher's instance gotten by ID.


_To test API via Visual Studio Code, install rest client in the market place. Then create a route.rest folder as available in the project source code to make necessary HTTP requests_


##### Important note ####
   1. Run npm install to install node modules
   2. Run mongod to start MongoDB database
   3. Run npm run devStart to start the server
   4. Use the routes.rest file to make test calls to the database