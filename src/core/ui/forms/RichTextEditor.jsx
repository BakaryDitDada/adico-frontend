import React, { useId, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import styled, { css } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Label, ErrorMessage, HelperText } from './InputField.styles';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xxs};
`;

const EditorWrapper = styled.div`
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background.primary};
  overflow: hidden;
  transition: all ${({ theme }) => theme.motion.normal};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:focus-within {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme, $hasError }) => 
      $hasError ? `${theme.colors.error}20` : `${theme.colors.primary}20`};
  }

  ${({ $disabled, theme }) => $disabled && css`
    background-color: ${theme.colors.background.tertiary};
    cursor: not-allowed;
    opacity: 0.7;
  `}
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderSecondary};
  background-color: ${({ theme }) => theme.colors.background.tertiary};
`;

const ToolbarGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxs};
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 1px;
    height: 1.6rem;
    background-color: ${({ theme }) => theme.colors.borderSecondary};
    margin: 0 ${({ theme }) => theme.spacing.xs};
  }
`;

const ToolbarButton = styled.button`
  background: transparent;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => `${theme.spacing.xxs} ${theme.spacing.xs}`};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.motion.fast};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.surface.hover};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ${({ $isActive, theme }) => $isActive && css`
    background-color: ${theme.colors.surface.active};
    color: ${theme.colors.primary};
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const StyledEditorContent = styled(EditorContent)`
  .ProseMirror {
    min-height: 200px;
    padding: ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.body};
    outline: none;

    p {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSizes.h2};
      font-weight: ${({ theme }) => theme.fontWeights.h2};
      line-height: ${({ theme }) => theme.lineHeights.h2};
      margin-top: ${({ theme }) => theme.spacing.xl};
      margin-bottom: ${({ theme }) => theme.spacing.md};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.h3};
      font-weight: ${({ theme }) => theme.fontWeights.h3};
      line-height: ${({ theme }) => theme.lineHeights.h3};
      margin-top: ${({ theme }) => theme.spacing.lg};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    h4 {
      font-size: ${({ theme }) => theme.fontSizes.h4};
      font-weight: ${({ theme }) => theme.fontWeights.h4};
      line-height: ${({ theme }) => theme.lineHeights.h4};
      margin-top: ${({ theme }) => theme.spacing.lg};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
      cursor: pointer;
      transition: color ${({ theme }) => theme.motion.fast};

      &:hover {
        color: ${({ theme }) => theme.colors.primaryDark};
      }
    }

    strong {
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    }

    em {
      font-style: italic;
    }

    ul, ol {
      padding-left: ${({ theme }) => theme.spacing.xl};
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }

    ul { list-style-type: disc; }
    ol { list-style-type: decimal; }
    
    & p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: ${({ theme }) => theme.colors.text.light};
      pointer-events: none;
      height: 0;
    }
  }
`;

export const RichTextEditor = ({
  name,
  label,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  className,
}) => {
  const generatedId = useId();
  const editorId = name || generatedId;
  const errorId = `${editorId}-error`;
  const helperId = `${editorId}-helper`;
  const hasError = Boolean(error);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          rel: 'noopener noreferrer',
          target: '_blank',
        },
      }),
    ],
    content: value,
    editable: !disabled,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <EditorContainer className={className}>
      {label && (
        <Label htmlFor={editorId} $hasError={hasError}>
          {label}
          {required && <span className="required-asterisk" aria-hidden="true">*</span>}
        </Label>
      )}

      <EditorWrapper $hasError={hasError} $disabled={disabled}>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              $isActive={editor.isActive('heading', { level: 2 })}
              disabled={disabled}
              aria-label="Heading 2"
            >
              H2
            </ToolbarButton>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              $isActive={editor.isActive('heading', { level: 3 })}
              disabled={disabled}
              aria-label="Heading 3"
            >
              H3
            </ToolbarButton>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
              $isActive={editor.isActive('heading', { level: 4 })}
              disabled={disabled}
              aria-label="Heading 4"
            >
              H4
            </ToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              $isActive={editor.isActive('bold')}
              disabled={disabled}
              aria-label="Bold"
            >
              Bold
            </ToolbarButton>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              $isActive={editor.isActive('italic')}
              disabled={disabled}
              aria-label="Italic"
            >
              Italic
            </ToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarButton
              type="button"
              onClick={setLink}
              $isActive={editor.isActive('link')}
              disabled={disabled}
              aria-label="Insert Link"
            >
              Link
            </ToolbarButton>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().unsetLink().run()}
              disabled={disabled || !editor.isActive('link')}
              aria-label="Remove Link"
            >
              Unlink
            </ToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              $isActive={editor.isActive('bulletList')}
              disabled={disabled}
              aria-label="Bullet List"
            >
              Bullet List
            </ToolbarButton>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              $isActive={editor.isActive('orderedList')}
              disabled={disabled}
              aria-label="Ordered List"
            >
              Ordered List
            </ToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ToolbarButton
              type="button"
              onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
              disabled={disabled}
              aria-label="Clear Formatting"
            >
              Clear
            </ToolbarButton>
          </ToolbarGroup>
        </Toolbar>

        <StyledEditorContent 
          editor={editor} 
          id={editorId}
          aria-invalid={hasError}
          aria-describedby={`${hasError ? errorId : ''} ${helperText ? helperId : ''}`.trim() || undefined}
        />
      </EditorWrapper>

      <AnimatePresence mode="wait">
        {hasError && (
          <ErrorMessage
            id={errorId}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            role="alert"
          >
            {error}
          </ErrorMessage>
        )}
      </AnimatePresence>

      {!hasError && helperText && (
        <HelperText id={helperId}>
          {helperText}
        </HelperText>
      )}
    </EditorContainer>
  );
};

RichTextEditor.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};