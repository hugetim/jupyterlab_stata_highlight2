module.exports = [
  {
    id: 'jupyterlab_stata_highlight2',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension jupyterlab_stata_highlight2 is activated!'
      );
      console.log(app.commands);
    }
  }
];
