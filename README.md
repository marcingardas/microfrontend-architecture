# Microfrontend Architecture

## Usage
Spin up application container and modules with:
```
sh start.sh
```

If any of the ports is taken, reset them with:
```
sudo sh resetPorts.sh
```

## Publishing
To publish changes, commit them and run:
```
yarn lerna publish
```

## Architecture
The application is composed of the following packages:
- **container** - serving an index.html file which imports the modules
- **module-navigation** - responsible for menu section of application
- **module-settings** - responsible for settings resource and page
- **module-users** - responsible for users resource and page
- **module-user** - responsible for user resource and popup
- **communication** - library used by each module to communicate with browser and other modules 

Here's a diagram describing the relationship between the packages:
![Architecture diagram](.github/images/architecture-diagram.png?raw=true)

## Benefits of this architecture
- Isolation
- Separation of responsiblity between modules
- Framework agnostic
- Separate deployments
- Separate development

## Drawbacks of this architecture
- Lower performance: packages used in multiple modules are imported multiple times (once for each module)
- Package conflicts: different package versions in different modules can conflict and cause unexpected behaviour

## An alternative to address drawbacks
An alternative way of architecturing the application is to use import the packages into the container so that the whole application is compiled into a single bundle. The drawbacks of this are:
- No separate deployments
- No separate development (slower development)
- All modules will have to use a single version of frameworks/libraries (there will be no conflicts though)
