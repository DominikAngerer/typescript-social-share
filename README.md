# Typescript Social Share [![Build Status](https://travis-ci.org/DominikAngerer/typescript-social-share.svg?branch=master)](https://travis-ci.org/DominikAngerer/typescript-social-share)
[![TS-Social Share Header (PNG)](http://ts-social-share.dominikangerer.com/github-images/header.png?v=2)](http://ts-social-share.dominikangerer.com/)

## [Documentation](http://ts-social-share.dominikangerer.com/docs/)

## [Running Example](http://ts-social-share.dominikangerer.com/)

[![TS-social-share Example (PNG)](http://ts-social-share.dominikangerer.com/github-images/example.png?v=2)](http://ts-social-share.dominikangerer.com/)

## Getting Started

To install this project
```
git clone git@github.com:DominikAngerer/typescript-social-share.git typescript-social-share
```

Now run:
```
npm install
```

## Run the server
```
gulp
```

## Build
To build, run
```
gulp build
```
If you add the `--production` flag all your js, css, html files get minified/uglified:
```
gulp build --production
```


## How to use

You can use the `data-social-share` attribute wherever you want, but as it triggers an action I would recommend to use a button.
There is also an example how to style them in the `/app/styles/components/_social_share.scss` file. The HTML can than look something like:

```
<button data-social-share="https://github.com/DominikAngerer/typescript-social-share" data-social-share-type="facebook">Share on facebook</button>
```

If `data-social-share` was left empty it will automatically share the current URL of the visitor.

### Pinterest

For Pinterest you also need a media Parameter (image or something) which should be displayed on pinterest. Simply add `data-social-share-media` to your button.

```
<button data-social-share="https://github.com/DominikAngerer/typescript-social-share" data-social-share-media="http://ts-social-share.dominikangerer.com/github-images/header.png" data-social-share-type="pinterest">Share on pinterest</button>
```

### Social Share Types
- Facebook - `data-social-share-type="facebook"`
- Pinterest - `data-social-share-type="pinterest"`
- Twitter - `data-social-share-type="twitter"`
- Google+ - `data-social-share-type="google-plus"`
- LinkedIn - `data-social-share-type="linkedin"`
- Xing - `data-social-share-type="xing"`
- VK - `data-social-share-type="vk"`
