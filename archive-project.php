<?php
get_header();
?>

<div class="container">
    <header class="archive-header">
        <h1 class="archive-title">Projects</h1>
    </header>

    <?php if (have_posts()) : ?>
        <div class="projects-grid">
            <?php while (have_posts()) : the_post(); ?>
                <?php get_template_part('template-parts/content', 'project'); ?>
            <?php endwhile; ?>
        </div>
        <?php the_posts_pagination(); ?>
    <?php else : ?>
        <?php get_template_part('template-parts/content', 'none'); ?>
    <?php endif; ?>
</div>

<?php
get_footer();