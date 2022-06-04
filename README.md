# :triangular_flag_on_post: Twitter Portfolio (NodeJS / ExpressJS / ReactJS / AWS)
Build a simple portfolio NodeJS based web app that displays the profile image, name, some text with the experience, and a 5 tweet list of the user's Twitter timeline.

## :hourglass: App technical information (Tools and services)

| Application | Tools and services | Repository | Development time 
| ------------- | ------------- | ------------- | ------------- |
| Serverless-app  | NodeJS/AWS/Serverless/DynamoDB  | [aws-lambda-node](https://github.com/joanayala/aws-lambda-node)  | 3 hrs  |
| Backend-app  | NodeJS/ExpressJS/AWS/Lightsail/TwitterAPI  | [portfolio_nodejs_aws](https://github.com/joanayala/portfolio_nodejs_aws)  | 3 hrs  |
| Frontend-app  | ReactJS/ViteJS/ Vercel  | [client-twitter](https://github.com/joanayala/client-twitter)  | 5 hrs  |

## :star: Application architecture

![alt text](https://github.com/joanayala/client-twitter/blob/main/src/api-docs/app-architecture.jpg)

## :fire: Local installation

Download or clone the repository to your computer and use the npm package manager to install the Frontend repository [client-twitter](https://github.com/joanayala/client-twitter). Then run the following commands in your terminal:

Install packages
```bash
npm install
```
Run local server
```bash
npm run dev
```
Now, you can open the app with your browser:

```bash
http://localhost:3000
```
Running the project will display the portfolio with a default user. To test other users (by id), you can do it adding the user id as parameter in the url:

```bash
http://localhost:3000/695a01f0-a51f-4d92-99f4-68c732d31235
```
If you want to get an user id, you can list all users through the following endpoint:

https://1gty4psi70.execute-api.us-west-2.amazonaws.com/user

:point_right: You can open the project in Vercel, however due to HTTPS configurations between AWS and Vercel, it is possible that the page index does not load, therefore, I recommend running it locally.

https://joandev-client-twitter.vercel.app/

## :v: Application UI (default user)

![alt text](https://github.com/joanayala/client-twitter/blob/main/src/api-docs/ui-portfolio.PNG)





