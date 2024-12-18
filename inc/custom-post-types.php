<?php
function register_project_post_type() {
    $labels = array(
        'name'               => 'Projects',
        'singular_name'      => 'Project',
        'menu_name'          => 'Projects',
        'add_new'           => 'Add New',
        'add_new_item'      => 'Add New Project',
        'edit_item'         => 'Edit Project',
        'new_item'          => 'New Project',
        'view_item'         => 'View Project',
        'search_items'      => 'Search Projects',
        'not_found'         => 'No projects found',
        'not_found_in_trash'=> 'No projects found in Trash',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'projects'),
        'capability_type'    => 'post',
        'menu_icon'          => 'dashicons-portfolio',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt'),
    );

    register_post_type('project', $args);
}
add_action('init', 'register_project_post_type');