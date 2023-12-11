/**
 * @module ditch/routes
 */

import React from 'react';
import { createHashRouter } from 'react-router-dom';

import { NestedProviders } from './contexts/NestedProviders';
import { ErrorsProvider } from './contexts/Errors';
import { DebugProvider } from './contexts/Debug';
import { LanguageProvider } from './contexts/Language';
import { AlertProvider } from './contexts/Alert';
import { CoverProvider } from './contexts/Cover';
import { ScreenSizeProvider } from './contexts/ScreenSize';
import { ErrorBoundary } from './contexts/ErrorBoundary';

import { Root } from './pages/root';
import { Error } from './pages/error';
import { About } from './pages/about';
import { Home, loader as homeLoader } from './pages/home';
import { Item, loader as itemLoader } from './pages/item';

const basename = PUBLIC_URL;

/** @typedef {import("@remix-run/router").Router} Router */

/**
 * When using React Router v6, it requires a trick for your
 * context providers to work. Say, if you had <RouterProvider>
 * for the outer most layer, and you had all the other providers
 * within, it does not work. Insted, you have to apply
 * the providers to <Root> element which is usually referred
 * as a "base layout" in React Router v6. This is why I have
 * <Wrapper> bellow which wraps <Root>.
 *
 * For <NestedProvider> is a tool to make codes easier to read.
 * When you have multiple layers of context providers, instead of
 * using JSX syntax to deeply nest them, <NestedProvider> takes
 * an array of providers, and nest the layers for you.
 * For instance, I have <ErrorBoundary> comes last, which means
 * <ErrorBoundary> will be the one to wrap all the others.
 *
 * @type {React.FC}
 * @constructs module:ditch/routes.Wrapper
 * @returns {React.ReactElement<any>}
 */
const Wrapper = () => (
  <NestedProviders
    components={[
      { provider: AlertProvider },
      { provider: CoverProvider },
      { provider: ScreenSizeProvider },
      { provider: LanguageProvider },
      { provider: DebugProvider },
      { provider: ErrorsProvider },
      { provider: ErrorBoundary },
    ]}
  >
    <Root />
  </NestedProviders>
);

/** @type {Router} */
export const router = createHashRouter(
  [
    {
      path: '/',
      element: <Wrapper />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/items/:itemId',
          element: <Item />,
          loader: itemLoader,
        },
      ],
    },
  ],
  { basename }
);
