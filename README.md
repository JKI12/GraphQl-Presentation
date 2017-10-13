# GraphQl-Presentation

# Building Manually
You can run it on your local machine by running
```
npm run build
npm start
```

or build it into a docker image by running
```
npm run build
docker build .
```
This will generate a docker image than can be ran using this command
```
docker run -p 3000:3000 IMAGE_ID
```

# Pulling the docker image
If you dont fancy building the code and just want to run the presentation then you can run this command
```
docker run -p 3000:3000 thatsourjake/graph_pres
```

# GraphiQl
The presentation contains interactive elements but the GraphiQl endpoint is open to have a play around by navigation to http://locahost:3000/graphiql