<?php
/**
 * Plugin Name: Blox Fruit Calculator
 * Description: A calculator for Blox Fruits trading
 * Version: 1.0
 * Author: Lovable
 */

// Prevent direct access
if (!defined('ABSPATH')) exit;

function blx_calculator_enqueue_scripts() {
    // Enqueue the built React assets
    wp_enqueue_script('blx-calculator-main', plugin_dir_url(__FILE__) . 'dist/assets/main.js', array(), '1.0', true);
    wp_enqueue_style('blx-calculator-styles', plugin_dir_url(__FILE__) . 'dist/assets/index.css', array(), '1.0');
    
    // Pass WordPress data to React
    wp_localize_script('blx-calculator-main', 'wpData', array(
        'pluginUrl' => plugin_dir_url(__FILE__),
        'baseUrl' => plugin_dir_url(__FILE__) . 'dist/'
    ));
}
add_action('wp_enqueue_scripts', 'blx_calculator_enqueue_scripts');

function blx_calculator_shortcode() {
    return '<div id="root"></div>';
}
add_shortcode('blx_calculator', 'blx_calculator_shortcode');