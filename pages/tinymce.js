import { Editor } from '@tinymce/tinymce-react';
// import '@tinymce/tinymce/themes/silver/theme';
// import '@tinymce/tinymce/plugins/paste';
function MyEditor() {
    const handleEditorChange = (content, editor) => {
      console.log('Content was updated:', content);
    };
  
    return (
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 300,
          width:1275,
          menubar: false,
          plugins: ['paste'],
          toolbar: 'undo redo | bold italic | paste',
        }}
        onEditorChange={handleEditorChange}
      />
    );
  }
   export default MyEditor;