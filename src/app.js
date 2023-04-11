import Main from './view/Main.js';

/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'App',

    launch: function () {
        // Ext.Viewport.add(new Main());
        Ext.Msg.alert('Test', 'Extjs app with webpack is working');
    }
});
