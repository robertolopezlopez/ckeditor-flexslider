CKEDITOR.plugins.add('flexslider', {
    icons: 'flexslider',
    init: function (editor) {
        // plugin logic goes here
        var that = this;
        this.editor = editor;

        this.lang = CKEDITOR.config.language;

        editor.addCommand('flexslider', new CKEDITOR.dialogCommand('flexsliderDialog'));

        // add the button
        editor.ui.addButton('flexslider', {
            label: 'Add a FlexSlider',
            command: 'flexslider',
            toolbar: 'flexslider'
        });

        CKEDITOR.dialog.add('flexsliderDialog', this.path + 'dialogs/flexslider.js');
    }
});