import { createListenerMiddleware } from '@reduxjs/toolkit';
import { setFieldValue } from './postsSlice';

export const formListenerMiddleware = createListenerMiddleware();

const DRAFT_KEY = 'post_form_draft';

formListenerMiddleware.startListening({
  // Listen for ANY changes to the form fields
  actionCreator: setFieldValue,
  effect: async (action, listenerApi) => {
    // 1. Cancel any in-progress instances of this listener
    // This provides our "debounce" effect
    listenerApi.cancelActiveListeners();

    // 2. Delay the execution (e.g., wait 800ms after the user stops typing)
    await listenerApi.delay(800);

    // 3. Get the latest state and save to localStorage
    const state = listenerApi.getState().postForm;
    
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(state.values));
    } catch (e) {
      console.warn('Local storage is full or disabled', e);
    }
  },
});