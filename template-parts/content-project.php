<?php ?>
<article class="project-card">
    <?php if (has_post_thumbnail()) : ?>
        <div class="project-thumbnail">
            <a href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('medium'); ?>
            </a>
        </div>
    <?php endif; ?>
    
    <div class="project-content">
        <h2 class="project-title">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
        </h2>
        <div class="project-excerpt">
            <?php the_excerpt(); ?>
        </div>
    </div>
</article>