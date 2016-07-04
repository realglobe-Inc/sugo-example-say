
/**
 * !! This is an auto-generated file and do not edit manually !! 
 * Snippet contents
 * @namespace Snippets
 */
'use strict'

/** Converted from "[object Object]" */
exports.DEFAULT_HTML = `<!--
 Default HTML for playground
-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="css/theme.css">
  <link rel="stylesheet" href="css/playground.css">
  <link rel="stylesheet" href="css/say.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
  <script src="js/external.cc.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body class="playground-body">
<div id="playground-root">
  <h3 class="playground-message">Loading dynamic contents...</h3>
</div>
</body>
</html>
`

/** Converted from "[object Object]" */
exports.DEFAULT_SCRIPT = `/**
 * Default script for playground
 */
'use strict'

require('babel-polyfill')

import React, {PropTypes as types} from 'react'
import {mount} from 'sg-react'
import {
  ApContainer,
  ApBigButton, ApSelect, ApButton, ApText, ApSelectableArticle,
  ApForm
} from 'apeman-react-basic'
import {
  SgMicrophone
} from 'sg-react-components'
import co from 'co'
import sugoTerminal from 'sugo-terminal'
import sgHearing from 'sg-hearing'
import asleep from 'asleep'

/**
 * Dynamic component create from the online-editor
 * @class Playground
 */
const Playground = React.createClass({
  // --------------------
  // Specs
  // --------------------

  getInitialState () {
    const s = this
    let { spots } = s.props
    return {
      /** Key of spot to connect */
      spotKey: spots.length > 0 ? spots[ 0 ].key : null,
      /** Date ping send */
      pingAt: null,
      /** Date pong received */
      pongAt: null,
      /** Name of available voices */
      voiceList: null,
      /** Selected voice */
      voice: null,
      /** Test to send */
      text: '',
      /** Hearing or not */
      hearing: false,
      /** Text heard */
      heard: '',

      recLangList: [ 'ja-JP', 'en-US' ],
      recLang: 'ja-JP',
      sentences: [
        {
          text: '',
          isFinal: false
        }
      ]
    }
  },

  render () {
    const s = this
    let { state, props } = s
    let { spots } = props
    let {
      spotKey, pingAt, pongAt, voiceList, voice, recLang, recLangList,
      sentences
    } = state
    return (
      <div className='dynamic-component'>
        <ApSelectableArticle
          options={ (spots || []).reduce((options, spot) => Object.assign(options, {[spot.key]: spot.key}), {}) }
          name='spotKey'
          label='Spot: '
          alt='No spot found! You need to connect one before playing'
          value={ spotKey }
          onChange={ (e) => s.setState({ spotKey: e.target.value }) }
        >
          <ApSelectableArticle.Content contentFor={ String(spotKey) }>
            <div className='playground-row'>
              <ApContainer>
                <div className='playground-item'>
                  <p>Send a ping and receive pong.</p>
                </div>
                <div className='playground-item'>
                  <ApBigButton
                    onTap={ () => s.withTerminal(function * sendPing (terminal) {
                      if (s.state.pongAt) {
                        // Reset to send ping
                        s.setState({pingAt: null, pongAt: null})
                        return
                      }

                      // Set up
                      let spot = yield terminal.connect(spotKey)
                      let noop = spot.noop()

                      // Do ping-pong
                      console.log('Send ping to noop...')
                      s.setState({pingAt: new Date().toLocaleTimeString()})
                      let pong = yield noop.ping()
                      s.setState({pongAt: new Date().toLocaleTimeString()})
                      console.log(${'`'}...received ping from noop: "${'${'}pong${'}'}"${'`'})

                      // Tear down
                      yield spot.disconnect()
                      yield asleep(10)
                  }) }
                    spinning={ pingAt && !pongAt }
                    primary={ !pingAt }
                  >{ pongAt ? ${'`'}Pong at ${'${'}pongAt${'}'}${'`'} : (pingAt ? 'Waiting...' : 'Send ping')} </ApBigButton>
                </div>
              </ApContainer>
            </div>
            <div className='playground-row'>
              <ApContainer>
                <div className='playground-item'>
                  <div>
                    <ApForm className='say-voice-form'>
                      <ApSelect value={ voice }
                                options={ (voiceList || []).reduce((options, voice) => Object.assign(options, {[voice]: voice}), {}) }
                                onChange={ (e) => s.setState({ voice: e.target.value }) }
                                name='voice'
                                placehodler='Value of voice'
                      />
                    </ApForm>
                  </div>
                  <div>
                    <h5 className="say-form-legend"> By Text</h5>
                    <ApForm className='say-text-form'>
                      <ApText name='text'
                              rows={ 2 }
                              placehodler='Text to speech'
                              value={ state.text }
                              onKeyUp={ (e) => (e.keyCode === 13) && s.submitText() }
                              onChange={ (e) => s.setState({ text: e.target.value }) }
                      />
                      <ApButton
                        primary
                        onTap={ () => s.submitText() }
                      > Send </ApButton>
                    </ApForm>
                    <h5 className="say-form-legend"> By speech</h5>
                    <ApForm className='say-speech-form'>
                      <ApSelect value={ recLang }
                                options={ (recLangList || []).reduce((options, voice) => Object.assign(options, {[voice]: voice}), {}) }
                                onChange={ (e) => s.setState({ recLang: e.target.value }) }
                                name='recLang'
                                placehodler='Lang to recognize'
                      />
                      <SgMicrophone onTap={ s.toggleHearing }
                                    on={ state.hearing }
                      />
                      <div>
                        {
                          sentences && sentences.map((sentence, i) => {
                            let className = sentence.isFinal ? 'sg-hearing-result-final' : 'sg-hearing-result-not-final'
                            return (
                              <div key={ i } className={className}>{ sentence.text }</div>
                            )
                          })
                        }
                      </div>
                    </ApForm>
                  </div>
                </div>
                <div className='playground-item'>
                  <p>
                    Invoke say command on the spot.
                  </p>
                </div>
              </ApContainer>
            </div>
            <br/>
            <br/>
          </ApSelectableArticle.Content>
        </ApSelectableArticle>
      </div>
    )
  },

  // --------------------
  // LifeCycle
  // --------------------

  componentDidMount () {
    const s = this
    let { protocol, host } = window.location
    s.terminal = sugoTerminal(${'`'}${'${'}protocol${'}'}//${'${'}host${'}'}/terminals${'`'})

    s.syncVoices()

  },

  // --------------------
  // custom
  // --------------------

  withTerminal (handler) {
    const s = this
    let { terminal } = s
    if (!terminal) {
      return
    }
    co(handler, terminal).catch((err) => console.error(err))
  },

  syncVoices () {
    const s = this
    return s.withTerminal(function * sync (terminal) {
      yield sleep(10) // Wait for spot state
      let { state } = s
      let { spotKey } = state
      if (!spotKey) {
        return
      }

      let spot = yield terminal.connect(spotKey)
      let say = spot.say()
      console.log('Start sync voices...')

      let voiceList = yield say.voices()
      s.setState({
        voiceList,
        voice: state.voice || 'Kyoko'
      })
      console.debug(${'`'}Detected voices: ${'${'}voiceList.join(',')${'}'}${'`'})

      console.log('...voices sync done!')
      yield spot.disconnect()
    })
  },

  submitText () {
    const s = this
    let { text } = s.state
    s.setState({ text: '' })
    s.doSpeechText(text)
  },

  toggleHearing () {
    const s = this
    let { hearing } = s.state
    if (hearing) {
      s.stopHearing()
    } else {
      s.startHearing()
    }
  },

  startHearing () {
    const s = this
    let { recLang } = s.state
    let ear = sgHearing(recLang)
    ear.on('start', (e) => {
      s.setState({ hearing: true })
    })
    ear.on('end', (e) => {
      s.setState({ hearing: false })
    })
    ear.on('result', (e) => {
      let { results } = e
      let lastResult = results[ results.length - 1 ]
      let { isFinal } = lastResult
      let text = lastResult[ 0 ].transcript

      let sentences = (s.state.sentences || []).concat()
      sentences[ sentences.length - 1 ] = { text, isFinal }
      if (isFinal) {
        for (let sentence of sentences) {
          s.doSpeechText(sentence.text)
        }
        sentences = [ {
          text: '',
          isFinal: false
        } ]
        s.stopHearing()
      }
      s.setState({ sentences })
    })

    ear.on('error', (e) => {
      console.error(e)
      s.setState({
        hearing: false
      })
    })
    ear.start()
    s.ear = ear
  },

  stopHearing () {
    const s = this
    let { ear } = s
    if (ear) {
      ear.stop()
    }
    s.setState({ hearing: false })
    delete s.ear
  },

  doSpeechText (text) {
    const s = this
    if (!text) {
      return
    }
    return s.withTerminal(function * speech (terminal) {
      let { state } = s
      let { spotKey, voice } = state
      if (!spotKey) {
        return
      }
      let spot = yield terminal.connect(spotKey)
      let say = spot.say()
      console.log('Speech text: ', text)
      say.say(text, { voice })
      yield spot.disconnect()
    })
  }
})

// Mount react component
setTimeout(() => {
  let mountRoot = document.getElementById('playground-root')
  mount(mountRoot, Playground, {
    spots: [].concat(window.spots || [])
  }).then(() => {
    console.debug('Playground mounted')
  }).catch((err) => console.error(err))
}, 500)
`

