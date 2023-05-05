In order to containerise an existing project/ app, you will need to follow the next steps:

1. If the project you're trying containerise is consisted of botth a frontend and a backend connected to a database, FIRST AND FOREMOST make sure your frontend code stack folder and your backend code stack folder are both situated in a parent folder, fx. folder myProject which contains myProjectFrontend folder and myProjectBackend folder.
   _if your backend is situated within your frontend folder, you NEED to remove the backend folder and create the above described structure in order for the containerising to work._

2. After structurizing your folders, you will need to create a Dockerfile for each of the folders - one inside the frontend folder and one inside the backned folder. The Dockerfile will make sure that the 2 code stacks are build properly upon mount, or more precisely, the Dockerfile will copy-paste all the needed dependencies and components, and finally mount the project by executing all the commands you would usually write in the terminal when first starting a project after fx. forking a project.

You can also install the Docker extention onto your VS Code, that will help you write, give suggestions to auto-write certain commands, and give you a better overview of your image and it's containers when writing the Dockerfile.

3. **Example of a Frontend Dockerfile**

FROM node:19 <or other programming language you're using; we coded our Frontend using Vite & JSX through npm installs thus we used Node.js>
WORKDIR /app <how you want to name the working directory for the docker container, best to just use /app for no confusion>
COPY package\*.json /app/ <copying the dependencies of the project inside the /app directory (folder)>
COPY . . <copying and pasting the rest of the project components into the previously set directory (/app)>
RUN npm install <mounting the project and installing all the dependencies by using the programming language's command you would usually write in the terminal>

4. **Example of a Backend Dockerfile**

FROM node:18-alpine <specifying which programming language was used to code the backend; we're using a smaller version of Node, to make the backend run faster since it has so many modules it needs to boot up, and is much larger in code stack in comparison to the Frontend code stack>
WORKDIR /app <how you want to name the working directory for the docker container you're creating, important to use a standerd name for later use in fx. volume creation where you will need to specify the path of a specific file in the Docker container directory>
COPY package\*.json /app/ <copying the dependencies of the project inside the /app directory (folder)>
RUN npm install <comand that installs all of the needed dependencies, the command relative to the programming language you're using,; the command you would usually write in the terminal>
COPY . . <copy pasting all the other coponents of the coding stack into the previously set directory (/app)>
RUN npm run build <the command responsible for mounting/ building the backend; in our case it's the 'npm run' since we're using Node>
ENV port=3004 <specifying the port number on which your local backend is using to connect to the localhost>
EXPOSE 3004 <specifying which port needs to be exosed/ opened within the docker-internal network; basically which port the Docker container will be using; it's easier to use the same port number as the port number used in the local build>
CMD ["npm", "start"] <the command that runs the/ starts the backend>

5. After creating the Dockerfiles in each of the folders, you will need to create also .dockerignore files for both the Frontend and Backend. It's purpose is the same as the .gitignore, but .dockerignore is supposed to be the .gitignore superset. That means that fx. in the .dockerignore file you would also add .git file and the .gitignore files since we don't want them copied into the Docker container directory - we don't want our Docker image connected to GitHub. The .dockerignore needs to include all the files you wouldn't want copied into the new Docker container directory, either because their not need like the node_mmodules (remember they will be automatically created when running npm install by the Dockerfile) or because the files are too big and we want our Docker container to mount as fast as possible.

_The .dockerignore file CANNOT be made automatically! You will have to create one manually - you can find examples in the Docker documentation_

6. **Example of a Node Frontend .dockerignore file**

/.classpath
/.dockerignore
/.git
/.gitignore
/.project
/.settings
/.toolstarget
/.vs
/.vscode
/.proj.user
/_.dbmdl
/.jfm
/charts
/docker-compose
/compose_
/Dockerfile\*
/node_modules
/npm-debug.log
/obj
/secrets.dev.yaml
\*\*/values.dev.yaml
LICENSE
README.md

7. **Example of a Node Backend .dockerignore file**

/.classpath
/.dockerignore
/.git
/.gitignore
/.project
/.settings
/.toolstarget
/.vs
/.vscode
/.proj.user
/_.dbmdl
/.jfm
/charts
/docker-compose
/compose_
/Dockerfile\*
/node_modules
/npm-debug.log
/obj
/secrets.dev.yaml
\*\*/values.dev.yaml
LICENSE
README.md
dist

8. The final step to containerizing an existing project/ app is writing a docker-compose.yml file and situating it into the parent folder. This file has to also be written manually, and the examples can be found online. If your app consists of a Frontend, Backend and a database connection, you will have to create a separate containers for each of them (so all in all 3 containers).

_Be careful with the spacing and text structure when writing the .yml file!!! Even a smallest mistake in the layout fx. an extra space can result in composing error!_

9. **Example of the docker-compose.yml file**

version: "3.7"

services: <in other words containers>
frontend: <frontend container>
build: ./daos <name of the directory/ folder where we would have the previously created /app frontend directory from the Dockerfile>
image: daosfrontend <name you want to give to your frontend image>
container_name: daosfrontcontainer <name you would like to give to the frontend container>
restart: unless-stopped <specifying if we want the container to restart or not>
depends_on: <what would the frontend container build/ changes depend on> - backend
ports: <the ports frontend uses to connect to the localhost; it's the same port number you're given when mounting the project using in our case npm run dev in the terminal> - "5173:5173" <best practice to keep the 2 of the port numbers the same; the first one marks the port used by the local frontend, and the second one marks the deocker container exposed port>
command: bash -c " npm run dev" <the terminal and command needed to run the frontend>
backend: <backend container>
build: ./daos-backend <name of the directory/ folder where we would have the previously created /app backend directory from the Dockefile>
image: daosbackend <name you want to give to your backend image>
container_name: daosbackcontainer <name you would like to give to the frontend container>
restart: unless-stopped <specifying if we want the container to restart or not>
ports: - "3004:3004" <best practice to keep the 2 of the port numbers the same; the first one marks the port used by the local backend, and the second one marks the deocker container exposed port>
environment: <here we specify to which database/ cloud server our database is connected to>
connection_string: mongodb+srv://bob:****\*\*****.mongodb.net/DAOS <the database link/ connection string; in our case we are directly connecting to a MongoDB private database repository>
port: 3004 <which port is being used by the backend; to which port the frontend is sending API calls and fetching the data from>
jwt_secret: turtles <which word will be used instead of sensitive/ secret/ private data>
depends_on: mongodb <what would the backend container build/ changes depend on >
networks: backdbnetwork <name of the docker-internal network for the backend>
mongodb: <the database container>
image: mongo <name of the image we are creating>
container_name: mongodbcontainer <the name of the database container>
restart: always <specifying the restart settings>
ports: <ports on which the databse is operating, for MongoDB the default for any connection is localhost or 27017; this can be found in your database's documentation> - "27017:27017" <best practice to keep the 2 of the port numbers the same; the first one marks the port used by the local database, and the second one marks the deocker container exposed port>
volumes: - dbdata:/data/db
networks: - backdbnetwork

volumes:
dbdata:
networks:
backdbnetwork:
driver: bridge

10. The very last step is to run the docker-compose.yml file in order to create the image and all the containers inside it (frontend, backend and database containers).

**To run the docker compose, open a new terminal in your VS Code and make sure you're situated in the paarent folder outside of the frontend and backend folders - the folder where you created the docker-compose.yml file. Then write in your terminal 'docker compose up' to build and run the docker containerizing. When the frontend container is created you will receive a localhost link in the terminal that you can click and try your now containerized app.**

To stop the containers at any time, press CTRL + C at any time.
