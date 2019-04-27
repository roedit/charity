# Charity
- [charity](#charity)
  - [Introduction](#introduction)
  - [Quick Start](#quick-start)
  - [Documentation](#documentation)
    - [Dependencies](#dependencies)
    - [Folder structure](#folder-structure)
    - [Development steps](#development-steps)

## Introduction

Implemention for a donation list starting from scratch

## Quick Start

```bash
# Clone the repository
git clone https://github.com/roedit/charity.git

# Go inside the directory
cd charity

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build

```

## Documentation

### Dependencies
"@babel/core": "^7.4.4", - Javascript compiler for older js runtimes
"@babel/preset-env": "^7.4.4", - Determine which features need to be transformed to run within a particular browser or runtime version
"@babel/preset-react": "^7.0.0", - Transform jsx to js
"babel-loader": "^8.0.5", - Transpiles js using babel and webpack
"html-webpack-plugin": "^3.2.0", - Generates the build html file
"webpack": "^4.30.0",  - The module bundler
"webpack-cli": "^3.3.1", - Allows to run webpack commands build scripts
"webpack-dev-server": "^3.3.1" - Development server with hot reload 

### Folder Structure

All the source code will be inside **src** directory. 

### Development Steps
1 Create the git repo 
2 Init the npm project
3 Add basic configuration
4 Add sass configuration