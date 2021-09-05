# Calculator

### Set up

after downloading the project use:

```bash
$ npm install
```

Start the project in development environment:

```bash
$ npm run dev
```

Run unit tests for project:

```bash
$ npm run cypress
```

project must run before executing the command in a different terminal

### Dependencies

The project was made with create-next-app

- [axios](https://axios-http.com/)
- [font-awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
- [cypress (dev)](https://docs.cypress.io/guides/overview/why-cypress)

### Description

The project was created with Next.js, Typescript and Sass.

The workflow was structured in a way that it can be easily followed by looking at the commits.

Considering the size of the project I did not choose to use **Bootstrap** because that would affect the the amount of **Sass** code I can write.

For the backend Next.js allowed me to work with express under the hood while saving time with the setup.

While building the components I paid attention to implement them a reuseable, scalable way, considering their use in a bigger application so they can be used later on. Like the ButtonCalculator component.

I used **Cypress** for unit testing, mostly focusing on render, component-user interaction, and state management.

### Question

What changes should be made to the application for it to be scalable, compatible with a multi-server environment for thousands of users?

### Answer

#### Preparation for the wave of users

In an application that expects thousands of concurrent users, the possibility of malfunction must be expected. Adding a middleware to the API endpoint that is responsible for logging such malfunctions would make it significantly faster to get a clear picture about what went wrong and fix those issues if there's any.

#### Scalability

As I built the application I paid attention to each responsibility of the components. For an application to be scalable the client must access only the functionalities of the user interface and if a functionality isn't only relevant to one component / usecase then it should be separated in its own module. You can find such method in the lib folder where the I/O functionality is stored in a clean reuseable way.

#### Database

Writing and reading a single file to get the result of a function isn't meant to be used in large scale applications. This particular example could be saved in a user session or in a database if the result should be preserved for later use.

#### State Management

Right now only the calculator has its local state so a state management tool like Redux was completely pointless, since it would only bring more complexity to the code. However if there is the possibility that the result might be accessed from different parts of the application cosidering these tools to avoid local state can be advantageous.
