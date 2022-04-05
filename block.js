
wp.blocks.registerBlockType( 'mygutb/block', {
    
    title: 'MyBannerBlock',

    description: wp.i18n.__( 'Block render banner with a specified text and button' ),

    icon: 'smiley',

    category: 'common',

    attributes: {
        
		textMessage: {
            type: 'string',
            source: 'html',
            selector: 'input',
        },
        textColorMessage: {
            type: 'string',
            default: '#000000',
        },
        backgroundColor: {
            type: 'string',
            default: '#8ED1FC',
        },
        borderColor: {
            type: 'string',
            dafault: '#ffffff'
        },

        textButton: {
            type: 'string',
            sourse: 'html',
            slector: 'a',
            default: wp.i18n.__('But-Name')
        },
        urlButton: {
            type: 'url',
            default: 'https://wordpress.org'
        },
        textColorButton: {
            type: 'string',
            default: '#ffffff',
        },
        backgroundColorButton: {
            type: 'string',
            default: '#00D084',
        },
        borderColorButton: {
            type:'string',
            default: '#000000'
        },

         urlImage: {
            type: 'string',
            // source: 'attribute',
            // selector: 'img',
            // attribute: 'src',
        },
               
	},

	edit: function( props ) {
        let onSelectImage = function( media ) {
            return props.setAttributes( { urlImage: media.url } );
        }
        let buttonBackgroundImage = function( obj ) {
            return wp.element.createElement( wp.components.Button, {
              className: 'button button-large',
              onClick: obj.open
              },
              wp.i18n.__( 'Background Image' ),
          );
        }

            return wp.element.createElement( 
                wp.element.Fragment, 
                null, 
                wp.element.createElement(
                    wp.blockEditor.InspectorControls, 
                    null,
                    wp.element.createElement(
                        wp.blockEditor.PanelColorSettings, {
                            title: wp.i18n.__("Banner Settings", "mygutb"),
                            colorSettings: [
                                {
                                    label: wp.i18n.__("Background Color", "mygutb"),
                                    value: props.attributes.backgroundColor,
                                    onChange: function( newBackgroundColor ) {
                                        props.setAttributes({ backgroundColor: newBackgroundColor });
                                    }
                                },
                                {
                                    label: wp.i18n.__("Border Color", "mygutb"),
                                    value: props.attributes.borderColor,
                                    onChange: function( newBorderColor ) {
                                        props.setAttributes({ borderColor: newBorderColor });
                                    }
                                },
                                {
                                    label: wp.i18n.__("Text Color Message", "mygutb"),
                                    value: props.attributes.textColorMessage,
                                    onChange: function( newTextColorMessage ) {
                                        props.setAttributes({ textColorMessage: newTextColorMessage });
                                    }
                                },
                                {
                                    label: wp.i18n.__("Text Color Button", "mygutb"),
                                    value: props.attributes.textColorButton,
                                    onChange: function( newTextColorButton ) {
                                        props.setAttributes({ textColorButton: newTextColorButton });
                                    }
                                },
                                {
                                    label: wp.i18n.__("Background Color Button", "mygutb"),
                                    value: props.attributes.backgroundColorButton,
                                    onChange: function( newBackgroundColorButton ) {
                                        props.setAttributes({ backgroundColorButton: newBackgroundColorButton });
                                    }
                                },
                                {
                                    label: wp.i18n.__("Border Color Button", "mygutb"),
                                    value: props.attributes.borderColorButton,
                                    onChange: function( newBorderColorButton ) {
                                        props.setAttributes({ borderColorButton: newBorderColorButton });
                                    }
                                },
                            ],
                        }, 
                        wp.element.createElement(
                            wp.blockEditor.MediaUpload, {
                            onSelect: onSelectImage,
                            value: props.attributes.urlImage,
                            render: buttonBackgroundImage,
                        } ),
                    ),
                    wp.element.createElement(
                        wp.components.TextControl, {
                            type: 'url',
                            label: 'Button Url:',
                            value: props.attributes.urlButton,
                            onChange: function( newUrlButton ) {
                                props.setAttributes({ urlButton: newUrlButton });
                            }
                        }
                    ),
                ), 
                
                
                wp.element.createElement( 'div', {
                class: "main-banner",
                style: { 
                    backgroundColor: props.attributes.backgroundColor,
                    backgroundImage: "url(" + props.attributes.urlImage + ")",
                    border: "7px solid" + props.attributes.borderColor,
                 }}, 
                    wp.element.createElement("div", {
                        class: "col-lg-12"
                    },
                        wp.element.createElement( 
                            wp.blockEditor.RichText, {
                                tagName: 'h2',
                                className: props.className,
                                value: props.attributes.textMessage,
                                style: {
                                    color: props.attributes.textColorMessage,
                                },
                                placeholder: wp.i18n.__("Enter Your Message Here Please"),
                                onChange: function( newTextMessage ) {
                                    props.setAttributes( { textMessage: newTextMessage } );
                                }
                            },
                        ),
                        wp.element.createElement("div", {
                            class: "main-button",
                        },
                            wp.element.createElement(
                                wp.blockEditor.RichText, {
                                    tagName: 'a',
                                    className: null,
                                    value: props.attributes.textButton,
                                    style: {
                                        backgroundColor: props.attributes.backgroundColorButton,
                                        border: "3px solid" + props.attributes.borderColorButton,
                                        color: props.attributes.textColorButton,
                                    },
                                    // placeholder: wp.i18n.__("Name Button"),
                                    onChange: function( newTextButton ) {
                                        props.setAttributes( { textButton: newTextButton } );
                                    },
                                    href: props.attributes.urlButton,
                                    target: '_blank'
                                }, 
                            ),
                        )
                    )
                ),
            )
    },

	save: function( props ) {
        return               wp.element.createElement( 'div', {
            class: "main-banner",
            style: {
                backgroundColor: props.attributes.backgroundColor,
                backgroundImage: "url(" + props.attributes.urlImage + ")",
                border: "7px solid" + props.attributes.borderColor,
             }}, 
                wp.element.createElement("div", {
                    class: "col-lg-12"
                },
                    wp.element.createElement( 
                        wp.blockEditor.RichText.Content, {
                            tagName: 'h2',
                            className: props.className,
                            value: props.attributes.textMessage,
                            style: {
                                color: props.attributes.textColorMessage,
                            },
                        },
                    ),
                    wp.element.createElement("div", {
                        class: "main-button",
                    },
                        wp.element.createElement(
                            wp.blockEditor.RichText.Content, {
                                tagName: 'a',
                                className: null,
                                value: props.attributes.textButton,
                                style: {
                                    backgroundColor: props.attributes.backgroundColorButton,
                                    border: "3px solid" + props.attributes.borderColorButton,
                                    color: props.attributes.textColorButton,
                                },
                                href: props.attributes.urlButton,
                                target: '_blank'
                            }  
                        ),
                    )
                )
            )        
	}
} );