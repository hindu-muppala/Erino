# Contact Management System

### Submission for Erino SDE Internship

## Overview
This project is a simple **Contact Management System** that allows users to add, view, and manage contact details efficiently. It is built using the **MERN stack** (MongoDB, Express.js, React, and Node.js).

---

## Installation

### Step 1: Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/hindu-muppala/Erino.git

cd backend

npm install

cd frontend/Erino

npm install

```
Database Setup

Step 1: Install MongoDB and mongosh Shell
Follow the official MongoDB installation guide for your operating system.

Start the MongoDB service:

```
mongod

```
Step 2: Connect to the MongoDB Database by mongosh shell

```
mongosh 

```
## Database Connection
### Then type "crm" like below in mongosh shell

![image](https://github.com/user-attachments/assets/8e94587b-7ed8-4e2c-90e1-53acf382141a)

## MongoDB Schema used:

![image](https://github.com/user-attachments/assets/057955e8-328d-4ff0-820e-87b76313af56)

## Why MongoDB?

- Since large number of users use the application to main the consistency and since the independent data is there, using MongoDB is better ( Since no need of joins )

- For faster response

- Heavy read responses is possible.

## Working

### Architecture

### Read contact

![image](https://github.com/user-attachments/assets/10e2cc7a-557d-4f5b-89c4-4f7fc6682199)


### Update contact

![image](https://github.com/user-attachments/assets/1da6febf-92a9-4c7c-9e81-9841a6cc73cc)


### Add contact

![image](https://github.com/user-attachments/assets/8b2f3649-d7c2-4be1-96ef-2431275a8b8d)


### Delete contact



## Challenges faced

- I deleted the some important technical files in the fontend, then retriving the files after debudding the error faced by deleting those files.

- Handling axios requests with backend required debugging skills, used console.error function to know the exact errors.

- Validations in database not by the backend node.js code by using schema made the process easliy.

- Desiging the state hooks in react.

- Designing form component.








