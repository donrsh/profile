import React, { Component } from 'react'

import './CVBlock.css'

import InfoBlock from '../InfoBlock/InfoBlock'
import FAWLink from '../../components/Link/FAWLink'

import works from '../../data/works'

const infoBlockData = {
  cssRelatedSkills: {
    title: 'CSS-related skills',
    id: 'css-related-skills'
  },

  jsRelatedSkills: {
    title: 'JavaScript-related skills',
    id: 'js-related-skills'
  },

  workSurroundingsAndTools: {
    title: 'Work Surroundings and Tools',
    id: 'work-surroudings-and-tools'
  },

  workExperience: {
    title: 'Work Experience',
    id: 'work-experience'
  },

  myWorks: {
    title: 'My Works',
    id: 'my-work'
  }
}

class CVBlock extends Component {
  render () {
    const {
      cssRelatedSkills,
      jsRelatedSkills,
      workSurroundingsAndTools,
      workExperience,
      myWorks
    } = infoBlockData

    return (
      <div id='CV-Block'>
        <InfoBlock
          title={workExperience.title}
          id={workExperience.id}
        >
          <ul className='info-list'>
            <li className='info-item'>
              Maintain an AngularJS project.
            </li>
            <li className='info-item'>
              React integration with Ruby on Rails (with this gem:
              <FAWLink
                text='react_on_rails'
                fawIconName='github'
                target='_blank'
                linkUrl='            https://github.com/shakacode/react_on_rails'
              />
              ).
            </li>
            <li className='info-item'>
              Code splitting based on routes with webpack 2.
            </li>
            <li>
              Integrate with <img
                src={require('../../images/stripe-logo.svg')}
                alt='stripe logo'
                style={{
                  height: 30,
                  verticalAlign: 'middle'
                }}
              /> to customized checkout flow.
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock
          title={myWorks.title}
          id={myWorks.id}
        >
          <ul className='info-list'>
            <li>
              {works.RWDExercise.name}
              {' - '}
              {works.RWDExercise.desc}
              {works.RWDExercise.append}
            </li>

            <li>
              {works.MMPCalculator.name}
              {' - '}
              {works.MMPCalculator.desc}
              {works.MMPCalculator.append}
            </li>

            <li>
              {works.RainDropAnimation.name}
              {' - '}
              {works.RainDropAnimation.desc}
              {works.RainDropAnimation.append}
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock
          title={cssRelatedSkills.title}
          id={cssRelatedSkills.id}
        >
          <ul className='info-list'>
            <li className='info-item'>
              CSS3 and flex-box layout
            </li>
            <li className='info-item'>
              Sass
            </li>
            <li className='info-item'>
              PostCSS - I use
              <FAWLink
                text='cssnext'
                fawIconName='link'
                target='_blank'
                linkUrl='http://cssnext.io/'
              /> and
              <FAWLink
                text='postcss-import'
                fawIconName='github'
                target='_blank'
                linkUrl='https://github.com/postcss/postcss-import'
              /> to implement css modulization of variables, fonts and breakpoints in webpack-based workflow
            </li>
            <li className='info-item'>
              RWD - media query and cross-devices image resource management by HTML5 <code>srcset</code> and <code>&lt;picture/&gt;</code> element feature
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock
          title={jsRelatedSkills.title}
          id={jsRelatedSkills.id}
        >
          <ul className='info-list'>
            <li className='info-item'>
              <div>React</div>

              <ul>
                <li>
                  React Router for SPA
                </li>
                <li>
                  HOC (Higher Order Component) pattern for automatic jobs of components, or providing react context for components
                </li>
                <li>
                  <FAWLink
                    text='Recompose'
                    fawIconName='github'
                    target='_blank'
                    linkUrl='https://github.com/acdlite/recompose'
                  />
                  for HOC implementation
                </li>
              </ul>
            </li>

            <li className='info-item'>
              <div>Redux</div>

              <ul>
                <li>
                  <FAWLink
                    text='Redux-Promise'
                    fawIconName='github'
                    target='_blank'
                    linkUrl='https://github.com/acdlite/redux-promise'
                  />/
                  <FAWLink
                    text='Redux-Saga'
                    fawIconName='github'
                    target='_blank'
                    linkUrl='https://github.com/redux-saga/redux-saga'
                  />
                - for grouping store operation logic, especially async ones are involved.
                </li>
              </ul>
            </li>

            <li className='info-item'>
              <div>MobX</div>
            </li>

            <li className='info-item'>
              <div>ES2015+</div>

              <ul>
                <li>Promise</li>
                <li>Async/Await</li>
                <li>Set (useful as event handler and id storage!)</li>
              </ul>
            </li>

            <li className='info-item'>
              <div>Fetch API to controll requests to servers</div>
            </li>

            <li className='info-item'>
              <div>jQuery</div>
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock
          title={workSurroundingsAndTools.title}
          id={workSurroundingsAndTools.id}
        >
          <ul className='info-list'>
            <li className='info-item'>
              <div>I use 🍎 Mac OS X for development.</div>
            </li>
            <li className='info-item'>
              <div>I use Visual Studio Code as my editor. Here are some packages I think convenient and use to integrate with my workflow: </div>
              <ul>
                <li>
                  <FAWLink
                    text='Path Intellisense'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense'
                  />
                  - for autocompletion of file path. With this extension, you barely type wrong path. 😎
                </li>
                <li>
                  <FAWLink
                    text='View Node Package'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=dkundel.vscode-npm-source'
                  />
                  - for autocompletion of node package. We sometimes forget the exact name of what we have installed, right? 😉
                </li>
                <li>
                  <FAWLink
                    text='Bracket Pair Colorizer'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer'
                  />
                  - add color to paired curly bracket and parenthesis and save your life.
                </li>
                <li>
                  <FAWLink
                    text='VSCode - Babel'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring'
                  />
                  - VS Code color syntax for ES6/ES7. You don’t want the red underline to destroy your perfect async/await code.
                </li>

                <li>
                  <FAWLink
                    text='vscode-open-project'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=svetlozarangelov.vscode-open-project'
                  />
                  - given project name and project path, you can just open another project without leaving VS code. Useful if you toggle between project a lot.
                </li>

                <li>
                  <FAWLink
                    text='vscode-icons'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons'
                  />
                  - provide file icon before filename, which makes your VS code file panel awesome. ♥️
                </li>

                <li>
                  <FAWLink
                    text='JavaScript Standard Style'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs'
                  />
                  - <FAWLink
                    text='Standard Style'
                    fawIconName='link'
                    target='_blank'
                    linkUrl='https://standardjs.com/'
                  /> is my current lint config. This extension integrate it with linting and auto fixing on saving. Just needs some package installation and configuartion.
                </li>

                <li>
                  <FAWLink
                    text='change-case'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=wmaurer.change-case'
                  />
                  - useful when changing variable format (camelCase, CONSTANT, lower, UPPER, blablabla)
                </li>

                <li>
                  <FAWLink
                    text='React Standard Style code snippets'
                    fawIconName='plug'
                    target='_blank'
                    linkUrl='https://marketplace.visualstudio.com/items?itemName=TimonVS.ReactSnippetsStandard'
                  />
                  - this plugin containers tons of React snippet in Standard styled js. Caution: you may forget how to import/export React component if you depend on it too much. 😂😂😂
                </li>

              </ul>
            </li>

            <li className='info-item'>
              <FAWLink
                text='Storybook'
                fawIconName='link'
                target='_blank'
                linkUrl='https://marketplace.https://storybook.js.org/'
              /> for fast prototying.
            </li>

            <li className='info-item'>
              <FAWLink
                text='json-server'
                fawIconName='github'
                target='_blank'
                linkUrl='https://github.com/typicode/json-server'
              /> and <FAWLink
                text='json-schema-faker'
                fawIconName='github'
                target='_blank'
                linkUrl='https://github.com/json-schema-faker/json-schema-faker'
              /> for fake backend.
            </li>

            <li className='info-item'>
              <FAWLink
                text='Git'
                fawIconName='git-square'
                target='_blank'
                linkUrl='https://git-scm.com/'
              />, in command line.
            </li>
          </ul>
        </InfoBlock>

      </div>
    )
  }
}

export default CVBlock
