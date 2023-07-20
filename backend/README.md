# Project Name

Short description or introduction of your project.

## Table of Contents

- [Project Description](#project-description)
- [Usage](#usage)
- [Features](#features)

## Project Description

Laravel API using Sanctum - Basic Login/Logout and Registration API

## Usage
Run migrations

API endpoints:
Registration : POST Method
/api/signup

Login: POST Method 
/api/login
Headers: Bearer token

User data: GET Method
/sanctum/csrf-cookie

Logout: POST Method
/api/logout
Header: Bearer token

## Features
update .env file with following code at the end of file

SESSION_DOMAIN = http://backend-api.lndo.site // add your url
SANCTUM_STATEFUL_DOMAINS = http://backend-api.lndo.site // add your url
