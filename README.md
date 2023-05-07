# Breweries App

Fetch, display, and search for brewery companies from the given API endpoint, using React and TypeScript

## Link to the demo

[https://integrify-brewery-companies.netlify.app/](https://integrify-brewery-companies.netlify.app/)

## Table of content

- [Technologies](#technologies)
- [Project structure](#project-structure)
- [Getting started](#getting-started)

<a name="technologies"></a>

## Technologies

- TypeScript
- React.js
- SASS
- Material UI

<a name="project-structure"></a>

## Project structure

```
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│
├───public
│       favicon.ico
│       index.html
│       logo192.png
│       logo512.png
│       manifest.json
│       robots.txt
│
└───src
    │   App.tsx
    │   index.scss
    │   index.tsx
    │
    ├───assets
    │   └───styles
    │       └───variables
    │               _colors.scss
    │               _fonts.scss
    │
    ├───components
    │   │   withLoading.tsx
    │   │
    │   ├───BackToHomeLink
    │   │       BackToHomeLink.scss
    │   │       BackToHomeLink.tsx
    │   │
    │   ├───CardDetail
    │   │       CardDetail.scss
    │   │       CardDetail.tsx
    │   │
    │   ├───CompanyList
    │   │       CompanyList.scss
    │   │       CompanyList.tsx
    │   │
    │   ├───Header
    │   │       Header.scss
    │   │       Header.tsx
    │   │
    │   └───SearchBar
    │           SearchBar.scss
    │           SearchBar.tsx
    │
    ├───types
    │       Company.ts
    │
    └───views
        ├───CompanyDetails
        │       CompanyDetails.scss
        │       CompanyDetails.tsx
        │
        ├───Home
        │       Home.tsx
        │
        └───NotFound
                NotFound.scss
                NotFound.tsx
```

<a name="getting-started"></a>

## Getting started

Clone the repository from github:

```
git clone https://github.com/tramnguyenhere/integrify_breweries-app.git
```
