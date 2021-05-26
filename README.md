# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` or `yarn docker-start`

You have 2 options to Run the app in the development mode.\
if using yarn start
, Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

if using yarn docker start
, Open [http://localhost:8443](http://localhost:8443) to view it in browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Using the Docker option you can perfrom your development using the docker contianer.

### `yarn docker-stop`

If you use docker-star then please remember to call docerk-stop to bring down the container.
Failure to do so will result in unable to launch again and must stop/kill the continer instance using docker commands.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Provides a code coverage report. Look for detailed code coverage report under /coverage folder.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

You can lint your code using the lint option. additionally you can use the `yarn lint:fix` to automatically fix possible lint errors.

### `yarn format`

The proejct uses prettier format to format and beautify the code.
