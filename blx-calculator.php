<?php
/**
 * Plugin Name: BLX Calculator
 * Description: A calculator plugin for BLX values
 * Version: 1.0.0
 * Author: Your Name
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue scripts and styles
function blx_calculator_enqueue_scripts() {
    // Get the plugin directory URL
    $plugin_url = plugin_dir_url(__FILE__);
    
    // Enqueue the React build files
    wp_enqueue_style('blx-calculator-style', $plugin_url . 'dist/assets/index.css');
    wp_enqueue_script('blx-calculator-js', $plugin_url . 'dist/assets/index.js', array(), '1.0.0', true);
    
    // Pass WordPress data to React
    wp_localize_script('blx-calculator-js', 'wpData', array(
        'pluginUrl' => $plugin_url,
        'nonce' => wp_create_nonce('wp_rest'),
    ));
}

// Register shortcode
function blx_calculator_shortcode() {
    // Enqueue scripts when shortcode is used
    blx_calculator_enqueue_scripts();
    
    // Return the container div where React will mount
    return '<div id="blx-calculator-root"></div>';
}

// Add shortcode
add_shortcode('blx_calculator', 'blx_calculator_shortcode');

// Initialize plugin
function blx_calculator_init() {
    // Add any initialization code here
}

add_action('init', 'blx_calculator_init');