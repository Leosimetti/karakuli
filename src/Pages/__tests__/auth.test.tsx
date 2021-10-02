import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import getTestStore from '../../__tests__/testStore'
import { AuthPage } from '../Auth/AuthPage'

// eslint-disable-next-line import/no-extraneous-dependencies,node/no-extraneous-import
import { describe, expect, it } from '@jest/globals'
// eslint-disable-next-line node/no-unpublished-import
import { render } from '@testing-library/react'

describe('Auth Page', () => {
  it('renders', () => {
    const { container } = render(
      <BrowserRouter>
        <Provider store={getTestStore()}>
          <AuthPage />
        </Provider>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })
})
