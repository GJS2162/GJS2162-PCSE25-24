
## The Automation World: Empowering Knowledge Exchange through a Comprehensive Platform for DevOps 
## Team Members

- **Gaurav Ji Srivastava**  
  Department: Computer Science and Engineering (CSE)  
  Roll Number: 2100290100064

- **Ayush Maurya**  
  Department: Computer Science and Engineering (CSE)  
  Roll Number: 2100290100042


# Setup and Execution Guide

This guide walks you through cloning, setting up, and running the Blogging Website project.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Steps to Run the Project

```
git clone https://github.com/arjuncvinod/Blogging-Website.git
cd Blogging-Website
```
```
npm install
```
Run the Mongodb container: 
```
docker run -d \
  --name mongodb \
  -p 27011:27017 \
  -v mongo-data-27011:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secret \
  mongo 
```
```  
docker cp ./mongo-dump/todoListDB mongodb:/dump
```
```
docker exec -it mongodb mongorestore \
--username admin \
--password secret \
--authenticationDatabase admin \
--db todoListDB \
/dump
```

```
node src/App.js
```
```sh
The Website will be available at http://localhost:3000
```
