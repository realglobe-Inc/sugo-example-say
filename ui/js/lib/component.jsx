/**
 * Root component to mount.
 * @class Component
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'

import cloudAgent from 'sugo-cloud/agent'
import fileAgent from 'sugo-agent-file'
import compileAgent from 'sugo-agent-compile'

import {
  SgExample,
  SgExampleHeader,
  SgExampleBody,
  SgExamplePlayground,
  SgExampleStatus,
  SgExampleLinks,
  SgExampleFooter,
  SgExampleTooltip,
  SgExampleAbout,
  SgExampleInstruction
} from 'sugo-react-example'
import sgReactComponents from 'sg-react-components'
import apemanReactBasic from 'apeman-react-basic'
import asleep from 'asleep'
import co from 'co'
import os from 'os'
import sugoTerminal from 'sugo-terminal'
import sgReact from 'sg-react'
import sgHearing from 'sg-hearing'
import sugoObserver from 'sugo-observer'

import {DEFAULT_SCRIPT, DEFAULT_HTML} from './snippets'
import markdowns from './markdowns'

const RequirePool = {
  co,
  os,
  asleep,
  'sugo-terminal': sugoTerminal,
  'sugo-observer': sugoObserver,
  'sg-react': sgReact,
  'sg-react-components': sgReactComponents,
  'sg-hearing': sgHearing,
  'apeman-react-basic': apemanReactBasic
}

/** @lends Component */
const Component = React.createClass({
  // --------------------
  // Specs
  // --------------------

  propTypes: {
    /** Port number of the cloud */
    port: types.number,
    /** Hostname of the cloud */
    hostname: types.string,
    /** Package data */
    pkg: types.object,
    /** Theme color */
    color: types.string
  },
  getInitialState () {
    const s = this
    let { props } = s
    return {
      html: DEFAULT_HTML,
      script: DEFAULT_SCRIPT,
      tab: 'DEMO',
      content: 'default',
      playground: false,
      reading: false,
      refreshing: false,
      tooltip: null,
      cloud: {},
      terminals: [],
      spots: [],
      globals: {
        require (name) {
          if (RequirePool[ name ]) {
            return RequirePool[ name ]
          }
          return window.require(name)
        }
      }
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { pkg } = props
    let { tab, script, html, globals, cloud, spots, terminals } = state
    return (
      <div>
        <SgExample>
          <SgExampleHeader { ...{ tab, pkg } }
            spots={ spots }
            runSpot={ () => s.setState({ tooltip: markdowns[ '12.Run Spot' ] }) }
            onTabChange={ (e) => s.setTab(e.tab) }/>
          <SgExampleBody hidden={ tab !== 'DEMO' }>
            <SgExampleAbout pkg={ pkg }/>
            <SgExampleStatus spots={ spots }
                             terminals={ terminals }
                             cloud={ cloud }
                             spinning={ state.refreshing }
                             onRefresh={ s.refreshStatus }
            />
            <SgExamplePlayground { ...{ html, script, globals } }
              compile={ s.compileScript }
              onChange={ s.handleChange }
              pipeConsole={ true }
              closed={ !state.playground }
              onToggle={ s.togglePlayground }
              defaultHtml={ DEFAULT_HTML }
              defaultScript={ DEFAULT_SCRIPT }
            />
          </SgExampleBody>
          <SgExampleBody hidden={ tab !== 'GUIDES' }>
            <SgExampleInstruction src={ [
              markdowns[ '11.Setup Cloud' ],
              markdowns[ '12.Run Spot' ],
              markdowns[ '13.Use Terminal' ]
            ] } vars={ s.getMarkdownVars() }/>
            <SgExampleLinks links={ require('../../../doc/links.json') }/>
          </SgExampleBody>
          <SgExampleFooter>

          </SgExampleFooter>
          <SgExampleTooltip onClose={ () => s.setState({ tooltip: null }) }
                            src={ state.tooltip }
                            vars={ s.getMarkdownVars() }
                            hidden={ !state.tooltip }
          />
        </SgExample>
      </div>
    )
  },

  componentDidMount () {
    const s = this
    let { protocol, host, hash } = window.location
    s.observer = sugoObserver(`${protocol}//${host}/observers`, (data) => {
      let { playground } = s.state
      if (!playground) {
        s.refreshStatus()
      }
    })

    s.compileAgent = compileAgent('/dynamic/compile')
    s.fileAgent = fileAgent('/dynamic/contents')
    s.cloudAgent = cloudAgent()

    s.observer.start()
    s.refreshStatus()
    s.setTab(String(hash).replace(/^#/, '').toUpperCase())
  },

  componentWillUnmount () {
    const s = this
    s.observer.stop()
  },

  // --------------------
  // custom
  // --------------------

  setTab (tab) {
    const s = this
    let valid = tab && !!~[ 'DEMO', 'GUIDES' ].indexOf(tab)
    s.setState({ tab: valid ? tab : 'DEMO' })
    window.location.hash = String(tab).toLowerCase()
  },

  handleChange (e) {
    const s = this
    let { state } = s
    let { html, script, globals } = e.values
    s.setState({ html, script, globals })
    s.tryAsync('saving', co(function * () {
      const { fileAgent } = s
      yield fileAgent.write(`${state.content}.html`, html)
      yield fileAgent.write(`${state.content}.jsx`, script)
    }))
  },

  compileScript (script) {
    const s = this
    let { compileAgent } = s
    return compileAgent.compile(script)
  },

  refreshStatus () {
    const s = this
    let { state, cloudAgent } = s
    let { location } = window
    if (!location) {
      return
    }
    s.tryAsync('refreshing', co(function * () {
      let spots = yield cloudAgent.spots()
      let terminals = yield cloudAgent.terminals()
      let cloud = { host: location.host }
      let globals = Object.assign(state.globals, { spots })
      s.setState({ spots, terminals, cloud, globals })
    }))
  },

  tryAsync (name, promise, delay = 300) {
    const s = this
    if (s.state[ name ]) {
      return Promise.resolve(true)
    }
    return Promise.resolve()
      .then(() => asleep(delay))
      .then(() => s.setState({ [name]: true }))
      .then(() => promise)
      .catch((err) => console.error(err))
      .then(() => s.setState({ [name]: false }))
  },

  togglePlayground () {
    const s = this
    let { state } = s
    let playground = !state.playground
    s.setState({ playground })
    if (playground) {
      s.tryAsync('reading', co(function * () {
        const { fileAgent, state } = s
        let html = yield fileAgent.read(`${state.content}.html`)
        let script = yield fileAgent.read(`${state.content}.jsx`)
        s.setState({
          html: html || state.html,
          script: script || state.script
        })
      }))
    }
  },

  getMarkdownVars () {
    const s = this
    let { location } = window
    return {
      __your_host__: location && location.host,
      __your_spot_name__: '__your_spot_name__' // TODO
    }
  }
})

export default Component
