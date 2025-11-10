import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import posthog from 'posthog-js';
import {PostHogProvider} from 'posthog-js/react';
import './index.css';

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    {import.meta.env.MODE === 'development' ? (
      <App />
    ) : (
      <React.StrictMode>
        <PostHogProvider client={posthog}>
          <App />
        </PostHogProvider>
      </React.StrictMode>
    )}
  </Fragment>
);
