<?php
get_header();
?>

<article class="single-project">
    <?php while (have_posts()) : the_post(); ?>
        <header class="project-header">
            <h1 class="entry-title"><?php the_title(); ?></h1>
            <div class="project-meta">
                <time datetime="<?php echo get_the_date('c'); ?>">
                    <?php echo get_the_date(); ?>
                </time>
            </div>
        </header>

        <?php if (has_post_thumbnail()) : ?>
            <div class="project-featured-image">
                <?php the_post_thumbnail('large'); ?>
            </div>
        <?php endif; ?>

        <div class="entry-content">
            <?php the_content(); ?>
        </div>
    <?php endwhile; ?>
</article>

<?php
get_footer();