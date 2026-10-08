import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { Form } from '@/core/ui/forms/Form';
import { FormCard, FormHeader, Row, SubmitButton, AlertMessage } from '@/core/ui/forms/Form.styles';
import { InputField } from '@/core/ui/forms/InputField';
import { RichTextEditor } from '@/core/ui/forms/RichTextEditor';

import { 
  setFieldValue, 
  setFieldTouched, 
  setValidationErrors, 
  resetForm,
  loadDraft, 
  clearDraft
} from '@/core/store/features/posts/postsSlice';
import { useCreatePostMutation } from '@/core/store/features/posts/postsApi';

// Local pure validation function
const validateForm = (values) => {
  const errors = {};

  if (!values.title.trim()) {
    errors.title = 'Post title is required.';
  } else if (values.title.length < 5) {
    errors.title = 'Title must be at least 5 characters long.';
  }

  if (!values.slug.trim()) {
    errors.slug = 'URL slug is required.';
  } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(values.slug)) {
    errors.slug = 'Slug must contain only lowercase letters, numbers, and hyphens.';
  }

  if (!values.content.trim() || values.content === '<p></p>') {
    errors.content = 'Post content cannot be empty.';
  }

  return errors;
};

export const CreatePostForm = ({ isInModal = false }) => {
  const dispatch = useDispatch();
  
  // RTK Slice State (Local Form Data)
  const { values, errors, touched, isHydrated } = useSelector((state) => state.posts); 
  
  // RTK Query API Hook (Server State & Actions)
  const [createPost, { isLoading, isSuccess, isError, error: serverError, reset }] = useCreatePostMutation();

  // useEffect(() => {
  //   return () => {
  //     dispatch(resetForm());
  //   };
  // }, [dispatch]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     const timer = setTimeout(reset, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [isSuccess, reset]);

  // 1. Hydrate the draft on mount (Client-side only)
  useEffect(() => {
    dispatch(loadDraft());
  }, [dispatch]);

  // 2. Handle successful submission
  useEffect(() => {
    if (isSuccess) {
      setShowSuccess(true);
      // Automatically wipe the Redux state AND Local Storage upon success
      dispatch(clearDraft()); 
      
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFieldValue({ field: name, value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    dispatch(setFieldTouched({ field: name }));
  };

  const handleEditorChange = (htmlContent) => {
    dispatch(setFieldValue({ field: 'content', value: htmlContent }));
  };

  const handleSubmit = async (e) => {
    // 1. Validate Form Sync
    const validationErrors = validateForm(values);
    
    // 2. If invalid, dispatch errors to state and abort submission
    if (Object.keys(validationErrors).length > 0) {
      dispatch(setValidationErrors(validationErrors));
      return;
    }

    // 3. If valid, execute RTK Query Mutation
    try {
      await createPost(values).unwrap();
      dispatch(resetForm());
    } catch (err) {
      // RTK Query handles exposing this via the `isError` and `serverError` hook variables
      console.error('Submission failed:', err);
    }
  };

  const getFieldError = (fieldName) => {
    return touched[fieldName] ? errors[fieldName] : undefined;
  };

  // Prevent 
  if(!isHydrated) return null;

  return (
    <FormCard $isTransparent={isInModal}>
      {
        !isInModal && (
          <FormHeader>
            <h2>Create New Post</h2>
            <p>Draft a new article for the corporate blog.</p>
          </FormHeader>
        )
      }

      <AnimatePresence mode="wait">
        {isSuccess && (
          <AlertMessage
            $variant="success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            role="status"
          >
            Post created successfully!
          </AlertMessage>
        )}

        {isError && (
          <AlertMessage
            $variant="error"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
          >
            {serverError?.data?.message || 'An unexpected error occurred.'}
          </AlertMessage>
        )}
      </AnimatePresence>

      <Form onSubmit={handleSubmit} layout="vertical">
        <Row>
          <InputField
            name="title"
            label="Post Title"
            placeholder="e.g., Q3 Financial Results"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError('title')}
            required
            disabled={isLoading}
            helperText="Appears as the H1 on the article page."
          />

          <InputField
            name="slug"
            label="URL Slug"
            placeholder="q3-financial-results"
            value={values.slug}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError('slug')}
            required
            disabled={isLoading}
            helperText="Unique identifier for the URL."
          />
        </Row>

        <RichTextEditor
          name="content"
          label="Article Content"
          value={values.content}
          onChange={handleEditorChange}
          error={getFieldError('content')}
          required
          disabled={isLoading}
          helperText="Use the toolbar to format your article structure."
        />

        <div className="form-actions">
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Publishing...' : 'Publish Post'}
          </SubmitButton>
        </div>
      </Form>
    </FormCard>
  );
};