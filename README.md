sugo-example-say
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-example-say
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-example-say
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-example-say.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-example-say
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-example-say.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-example-say/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-example-say
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-example-say.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-example-say.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-example-say
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-example-say.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-example-say
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-example-say.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

SUGOS example project to invoke `say` command on remote MAC

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


[![favicon_url]][app_url]

[app_url]: http://sugo-example-say.herokuapp.com
[favicon_url]: http://realglobe-inc.github.io/sugo-example-say/images/favicon.png


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/00.Requirements.md.hbs" Start -->

<a name="section-doc-guides-00-requirements-md"></a>
Requirements
-----
<a href="http://www.apple.com/mac/">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/mac-banner.svg"
       alt="Mac"
       height="40"
       style="height:40px"
  /></a>
<a href="https://nodejs.org">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/nodejs-banner.png"
       alt="Node.js"
       height="40"
       style="height:40px"
  /></a>
<a href="https://docs.npmjs.com/">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/npm-banner.png"
       alt="NPM"
       height="40"
       style="height:40px"
  /></a>

+ [MAC ( OS X )][mac_url]
+ [Node.js ( >=6.x )][node_download_url]
+ [npm ( >=3.x )][npm_url]

This example uses `say` command of OSX, thus you need a mac.

[mac_url]: http://www.apple.com/mac/
[node_download_url]: https://nodejs.org/en/download/
[npm_url]: https://docs.npmjs.com/



<!-- Section from "doc/guides/00.Requirements.md.hbs" End -->

<!-- Section from "doc/guides/01.Quick Start.md.hbs" Start -->

<a name="section-doc-guides-01-quick-start-md"></a>
Quick Start
-----

Deploy to the [Heroku][heroku_url] and play it!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)][heroku_deploy_url]

[heroku_url]: https://www.heroku.com/
[heroku_deploy_url]: https://heroku.com/deploy?template=https://github.com/realglobe-Inc/sugo-example-say/tree/heroku


<!-- Section from "doc/guides/01.Quick Start.md.hbs" End -->

<!-- Section from "doc/guides/10.How to.md.hbs" Start -->

<a name="section-doc-guides-10-how-to-md"></a>
How to
-------

<!-- Section from "doc/guides/10.How to.md.hbs" End -->

<!-- Section from "doc/guides/11.Setup Cloud.md.hbs" Start -->

<a name="section-doc-guides-11-setup-cloud-md"></a>
### Setup Cloud

Install the CLI

```bash
$ npm install sugo-example-say -g
```

Then, start the server

```bash
$ PORT=300 sugo-example-say cloud
```

In the most of cases, you need to setup reverse-proxy (like [nginx][nginx_url]) to exports the server to the outer world.

[nginx_url]: https://www.nginx.com/


<!-- Section from "doc/guides/11.Setup Cloud.md.hbs" End -->

<!-- Section from "doc/guides/12.Run Spot.md.hbs" Start -->

<a name="section-doc-guides-12-run-spot-md"></a>
### Run Spot


Install the CLI to machine which the spot runs on. 

```bash
$ npm install sugo-example-say -g
```

Then, connect spot to the cloud

```bash
$ HOSTNAME=__hostname_of_your_cloud__ SPOT_KEY=__your_own_spot_name__ sugo-example-say spot
```


<!-- Section from "doc/guides/12.Run Spot.md.hbs" End -->

<!-- Section from "doc/guides/13.Use Terminal.md.hbs" Start -->

<a name="section-doc-guides-13-use-terminal-md"></a>
### Use Terminal


Install the CLI to machine which the use terminal.

```bash
$ npm install sugo-example-say -g
```

Then, run the example terminal

```bash
$ HOSTNAME=__hostname_of_your_cloud__ sugo-example-say terminal
```

<!-- Section from "doc/guides/13.Use Terminal.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-example-say/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos

<!-- Links End -->
