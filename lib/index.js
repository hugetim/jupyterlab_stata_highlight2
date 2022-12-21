
import './stata.js'

export default [
  {
    id: 'jupyterlab_stata_highlight2',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension jupyterlab_stata_highlight2 is activated!'
      );
      console.log(app.commands);
      registerStataFileType(app);
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