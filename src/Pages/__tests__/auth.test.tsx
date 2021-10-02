import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { describe, expect, it } from '@jest/globals'
import getTestStore from '../../__tests__/testStore'
import { AuthPage } from '../Auth/AuthPage'

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
