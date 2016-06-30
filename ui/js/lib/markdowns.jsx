
/**
 * !! This is an auto-generated file and do not edit manually !! 
 * Markdown contents
 * @namespace Markdowns
 */
'use strict'

let restore = (text) => text.replace(/&#x60;/g, '`').replace(/&#x3D;/g, '=')

/** Converted from "doc/guides/00.Requirements.md.hbs" */
exports[ '00.Requirements' ] = restore(`Requirements
-----
&lt;a href&#x3D;&quot;http://www.apple.com/mac/&quot;&gt;
  &lt;img src&#x3D;&quot;https://realglobe-inc.github.io/sugos-assets/images/mac-banner.svg&quot;
       alt&#x3D;&quot;Mac&quot;
       height&#x3D;&quot;&quot;
       style&#x3D;&quot;height:px&quot;
  /&gt;&lt;/a&gt;
&lt;a href&#x3D;&quot;https://nodejs.org&quot;&gt;
  &lt;img src&#x3D;&quot;https://realglobe-inc.github.io/sugos-assets/images/nodejs-banner.png&quot;
       alt&#x3D;&quot;Node.js&quot;
       height&#x3D;&quot;&quot;
       style&#x3D;&quot;height:px&quot;
  /&gt;&lt;/a&gt;
&lt;a href&#x3D;&quot;https://docs.npmjs.com/&quot;&gt;
  &lt;img src&#x3D;&quot;https://realglobe-inc.github.io/sugos-assets/images/npm-banner.png&quot;
       alt&#x3D;&quot;NPM&quot;
       height&#x3D;&quot;&quot;
       style&#x3D;&quot;height:px&quot;
  /&gt;&lt;/a&gt;

+ [MAC ( OS X )][mac_url]
+ [Node.js ( &gt;&#x3D;6.x )][node_download_url]
+ [npm ( &gt;&#x3D;3.x )][npm_url]

This example uses &#x60;say&#x60; command of OSX, thus you need a mac.

[mac_url]: http://www.apple.com/mac/
[node_download_url]: https://nodejs.org/en/download/
[npm_url]: https://docs.npmjs.com/

`)

/** Converted from "doc/guides/01.Quick Start.md.hbs" */
exports[ '01.Quick Start' ] = restore(`Quick Start
-----

Deploy to the [Heroku][heroku_url] and play it!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)][heroku_deploy_url]

[heroku_url]: https://www.heroku.com/
[heroku_deploy_url]: https://heroku.com/deploy?template&#x3D;https://github.com//tree/heroku
`)

/** Converted from "doc/guides/10.How to.md.hbs" */
exports[ '10.How to' ] = restore(`How to
-------`)

/** Converted from "doc/guides/11.Setup Cloud.md.hbs" */
exports[ '11.Setup Cloud' ] = restore(`### Setup Cloud

Install the CLI

&#x60;&#x60;&#x60;bash
$ npm install sugo-example-say -g
&#x60;&#x60;&#x60;

Then, start the server

&#x60;&#x60;&#x60;bash
$ PORT&#x3D;3000 sugo-example-say cloud
&#x60;&#x60;&#x60;

In the most of cases, you need to setup reverse-proxy (like [nginx][nginx_url]) to exports the server to the outer world.

[nginx_url]: https://www.nginx.com/
`)

/** Converted from "doc/guides/12.Run Spot.md.hbs" */
exports[ '12.Run Spot' ] = restore(`### Run Spot


Install the CLI to machine which the spot runs on. 

&#x60;&#x60;&#x60;bash
$ npm install sugo-example-say -g
&#x60;&#x60;&#x60;

Then, connect spot to the cloud

&#x60;&#x60;&#x60;bash
$ HOSTNAME&#x3D;&quot;__your_host__&quot; SPOT_KEY&#x3D;&quot;__your_spot_name__&quot; sugo-example-say spot
&#x60;&#x60;&#x60;
`)

/** Converted from "doc/guides/13.Use Terminal.md.hbs" */
exports[ '13.Use Terminal' ] = restore(`### Use Terminal


Install the CLI to machine which the use terminal.

&#x60;&#x60;&#x60;bash
$ npm install sugo-example-say -g
&#x60;&#x60;&#x60;

Then, run the example terminal

&#x60;&#x60;&#x60;bash
$ HOSTNAME&#x3D;&quot;__your_host__&quot; sugo-example-say terminal
&#x60;&#x60;&#x60;`)

