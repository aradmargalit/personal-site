## My Personal Website

Built with React, React Router, and Bootstrap (via [reactstrap](https://reactstrap.github.io/))

### Development

1. Install dependencies

```bash
$ yarn install
```

2. Start the local server

```bash
$ yarn start
```

### Deployment

This site is hosted on AWS S3 and routing is handled by Route 53. To deploy, please configure the environment with the security credentials and then:

```
yarn build && aws s3 sync build/ s3://www.aradmargalit.com
```
