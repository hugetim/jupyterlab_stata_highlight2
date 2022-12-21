import { stata_mode } from './stata.js';
import { ICodeMirror } from '@jupyterlab/codemirror';

export default [
  {
    id: 'jupyterlab_stata_highlight2',
    autoStart: true,
    requires: [ICodeMirror],
    activate: function (app, codeMirror) {
      console.log(
        'JupyterLab extension jupyterlab_stata_highlight2 is activated-03!'
      );
      console.log(app.commands);
      registerStataFileType(app);
      console.log(
        'JupyterLab extension jupyterlab_stata_highlight2 end'
      );
      codeMirror.CodeMirror.defineSimpleMode("stata", stata_mode);
      codeMirror.CodeMirror.defineMIME('text/x-stata', 'stata');
      codeMirror.CodeMirror.defineMIME('text/stata', 'stata');
      codeMirror.CodeMirror.modeInfo.push({
        ext: ['do', 'ado'],
        mime: "text/x-stata",
        mode: 'stata',
        name: 'Stata'
      });
    }
  }
];

function registerStataFileType(app) {
  app.docRegistry.addFileType({
    name: 'stata',
    displayName: 'Stata',
    extensions: ['do', 'ado'],
    mimeTypes: ['text/x-stata'],
  });
}
