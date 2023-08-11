# TSpark (Work in Progress)

TSpark is a full-stack TypeScript base project that empowers developers to quickly prototype and develop scalable React/Express applications.

Benefits:
- **Jumpstart your development:** TSpark provides a solid foundation and best practices for building React/Express projects, saving you valuable time.
- **Scalable architecture:** Built with scalability in mind, TSpark enables your ideas to grow into fully-fledged applications without major refactoring.
- **TypeScript support:** Leverage the power of TypeScript for type safety and improved code maintainability.
<!-- - **Seamless integration:** Easily integrate additional libraries, APIs, and modules into your project to extend functionality. -->
<!-- - **Community-driven:** Join a thriving community of developers using TSpark, benefiting from ongoing updates and contributions. -->

Please note that TSpark is still a work in progress, and additional features and improvements are actively being developed.

## Getting started

To start the frontend and backend in development mode, use the following command:

```
npm run start:dev
```

### Launching client and server separately

To launch the client and server separately, use the following commands:

#### Common
Execute the following command inside `packages/common`:

```
npm run watch
```

#### Frontend

Execute the following command inside `packages/client`:

```
npm run start:dev
```

#### Backend
Execute the following commands inside `packages/api`:

```
npm run watch
```

```
npm run start:dev
```

### VSCode launch configuration

For your convenience, we've included a pre-configured `launch.json` in the project. Enhance your development experience with seamless debugging and code navigation in VSCode.
