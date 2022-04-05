<?php
/**
 * Plugin Name: Banner-Block
 * Description: 
 * Author: Aleksandr Ha&Ko
 * Version: 1.0.0
 */


add_action('init', 'mygutb_register_block_assets');
 
function mygutb_register_block_assets() {

    // creating a variable for our js file path
    $block_path = '/block.js';
    // registering the editor script that contains our blocks
    wp_register_script(
        'mygutb-block',
        plugins_url( $block_path , __FILE__ ),
        [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
        filemtime( plugin_dir_path( $block_path , __FILE__ ) )
    );

    // creating a variable for our css file path
    $style_path = '/block.css';
    wp_register_style(
    'mygutb-block-styles',
        plugins_url( $style_path , __FILE__ ),
        [],
        filemtime( plugin_dir_path( $style_path , __FILE__ ) )
    );

    register_block_type( 'mygutb/block', array(
        'editor_script' => 'mygutb-block',
        'style' => 'mygutb-block-styles',
        'render_callback' => 'mygutb-render-callback',
    ) );
}