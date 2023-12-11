/**
 * @module ditch/index
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import './i18n';
import './styles/main.css';

console.log('[index] NODE_ENV: ', NODE_ENV);
console.log('[index] PUBLIC_URL: ', PUBLIC_URL);

const root = createRoot(document.getElementById('app'));

root.render(<RouterProvider router={router} />);
