import { createSlice } from '@reduxjs/toolkit';

const DRAFT_KEY = "post_form_draft";

const initialState = {
  values: {
    title: '',
    slug: '',
    content: '',
  },
  errors: {},
  touched: {},
  isHydrated: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state.values[field] = value;
      // Clear specific field error when user starts typing
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    setFieldTouched: (state, action) => {
      const { field, isTouched = true } = action.payload;
      state.touched[field] = isTouched;
    },
    setValidationErrors: (state, action) => {
      state.errors = action.payload;
      // Mark all fields with errors as touched so the UI shows the errors
      Object.keys(action.payload).forEach((field) => {
        state.touched[field] = true;
      });
    },
    resetForm: () => initialState,
    // Action to load draft from localStorage (safe for Next.js SSR)
    loadDraft: (state) => {
      if (typeof window !== 'undefined') {
        try {
          const draft = localStorage.getItem(DRAFT_KEY);
          if (draft) {
            state.values = { ...state.values, ...JSON.parse(draft) };
          }
        } catch (e) {
          console.error('Failed to parse form draft', e);
        }
      }
      state.isHydrated = true;
    },
    // Clears both Redux state and localStorage
    clearDraft: () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(DRAFT_KEY);
      }
      return { ...initialState, isHydrated: true };
    },
  },
});

export const { 
  setFieldValue, 
  setFieldTouched, 
  setValidationErrors, 
  resetForm,
  loadDraft,
  clearDraft
} = postsSlice.actions;

export default postsSlice.reducer;