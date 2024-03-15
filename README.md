thing or two task!

Welcome to the task!  This project leverages the power of Docker to streamline development and deployment processes, ensuring that you can focus on building amazing features without worrying about the environment setup.

Getting Started:)
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following tools installed on your system:

Docker
Docker Compose
Installation
Follow these simple steps to get your development environment running:

Clone the Repository

Start by cloning this repository to your local machine using:

git clone https://github.com/zeevjo/thing-02-task.git
Enter the Server Directory

Navigate to the server directory within the project:

Launch the Docker Containers

Use Docker Compose to build and start the containers:

docker-compose up --build
This command will download the necessary Docker images, build your containers, and start everything up. The first time you run this command, it may take some time to download and build everything.

Accessing the Frontend
After the Docker containers are up and running, you can access the frontend of our application at:

Frontend URL: http://localhost
Enjoy exploring!

Accessing the Database with pgAdmin
Our project uses PostgreSQL for data persistence, and you can manage the database using pgAdmin:

pgAdmin URL: http://localhost:5050
When accessing pgAdmin for the first time, set up a new server connection with the following details:

pgAdmin 
username:admin@admin.com
password:pgadmin4

in pgDAdmin:

registrar to the sever in the contianer

with the follwing credentials

Name: db
Host: db
username:postgsql
password postgsql

These credentials will allow you to connect to the PostgreSQL database and manage it directly from pgAdmin.

thank you for the opportunity
