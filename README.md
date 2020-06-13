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
- **container** - serving an index.html file which loads the modules
- **module-navigation** - responsible for menu section of application
- **module-settings** - responsible for settings resource and page
- **module-users** - responsible for users resource and page
- **module-user** - responsible for user resource and popup
- **communication** - library used by modules to communicate with browser and other modules 

Here's a diagram describing the relationship between the packages:
![Architecture diagram](.github/images/architecture-diagram.png?raw=true)

## Benefits of this architecture
- Isolation
- Separation of responsiblity between modules
- Framework agnostic
- Separate deployments
- Separate development

## Drawbacks of this architecture
- Shared packed version restrictions: only a single version of package can be shared between modules
- Non-shared package conflicts: different package versions in different modules can conflict and cause unexpected behaviour

## An alternative architecture
An alternative way of architecturing the application (demonstrated in `container-alternative` package) is to import the module packages into the container and compile the application into a single bundle. This has drawbacks:
- No separate deployments
- No separate development (slower development)
