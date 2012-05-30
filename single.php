<?php
/**
 * @package WordPress
 * @subpackage themename
 */

get_header(); ?>

			<div id="content">
			
			<!--<nav id="nav-above" role="article">
					<h1 class="section-heading"><?php _e( '', 'themename' ); ?></h1>
					<div class="nav-previous"><?php previous_post_link( '%link', '<span class="meta-nav">' . _x( '&larr;', 'Previous post link', 'themename' ) . '</span> %title' ); ?></div>
					<div class="nav-next"><?php next_post_link( '%link', '%title <span class="meta-nav">' . _x( '&rarr;', 'Next post link', 'themename' ) . '</span>' ); ?></div>
			</nav> -->

			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> role="article">
					
					<header class="entry-header">
						<h1 class="entry-title"><?php the_title(); ?></h1>

						<div class="entry-meta">
        						
        					<?php if ( 'gig' == get_post_type() ) :
						
								$date = get_post_meta($post->ID, 'gig_date', true);
								$date = date_create($date);
								$date = date_format($date, 'D j F g:iA'); ?>
								
							<p>
								<!-- Gig -->
								
								<?php if ( get_post_meta($post->ID, 'venue', true) && get_post_meta($post->ID, 'venue_link', true) ) : ?>
							
									<span class="venue">
										<a href="<?php echo get_post_meta($post->ID, 'venue_link', true) ?>" title = 	" <?php echo get_post_meta($post->ID, 'venue', true) ?>"><?php echo get_post_meta($post->ID, 'venue', true) ?></a>
									</span>
								
								<?php elseif ( get_post_meta($post->ID, 'venue', true) ): ?>
								
									<span class="venue">
										<?php echo get_post_meta($post->ID, 'venue', true) ?>
										</span>
									
								<?php endif; ?>
									
									<time class="gig-date"><?php echo $date ?></time>
							
						
								<?php if ( get_post_meta($post->ID, 'buy_tickets_text', true ) && get_post_meta($post->ID, 'buy_tickets_link', true )) : ?>
				
										<span class="more-info">
											<a href="<?php echo get_post_meta($post->ID, 'buy_tickets_link', true) ?>" title = "<?php echo $buy_tix_text ?>">
												<?php echo get_post_meta($post->ID, 'buy_tickets_text', true); ?>
											</a>
										</span>
									
									<?php elseif (get_post_meta($post->ID, 'buy_tickets_text', true)) : ?>
										
										<span class="more-info">
											<?php echo get_post_meta($post->ID, 'buy_tickets_text', true); ?>
										</span>
										
									<?php elseif (get_post_meta($post->ID, 'buy_tickets_link', true )) : ?>
									
										<span class="more-info">
											<a href="<?php echo get_post_meta($post->ID, 'buy_tickets_link', true) ?>" title = "Buy tickets">
												Buy tickets
											</a>
										</span>
									
								<? endif; ?>
						
						<?php else: ?>
						
							<?php	printf( __( '<time class="entry-date" datetime="%2$s" 					pubdate>%3$s</time>'),
							get_permalink(),
							get_the_date( 'c' ),
							get_the_date(),
							get_author_posts_url( get_the_author_meta( 'ID' ) ),
							sprintf( esc_attr__( 'View all posts by %s', 'themename' ), get_the_author() 			),
							get_the_author()
							);
							?>
						
						<?php endif; ?>
						
						</div><!-- .entry-meta -->
						
						<div class="media-container">
        						
						<?php if ( 'releases' == get_post_type() && get_post_meta($post->ID, 'track_embed_code', true)):?>
								
								
								<?php 
								
								$trackcode = get_post_meta($post->ID, 'track_embed_code', true);
					
  								if(stristr($trackcode, "http://player.soundcloud.com/player.swf?") === FALSE) : ?>
  								
    									<?php echo $trackcode; ?>
  								
  								<?php else: ?>
  								
  										<?php 
  										$parampos = strpos($trackcode, '<embed');
  										$trackmod = substr_replace($trackcode, '<param name="wmode" value="opaque"></param> ', $parampos, 0);
  										echo $trackmod;
  										?>
  								
  								<?php endif;?>
  								
        						
						<?php elseif ( 'video' == get_post_type() && get_post_meta($post->ID, 'video_embed_code', true)): ?>
						
								<?php 
								
								$embedcode = get_post_meta($post->ID, 'video_embed_code', true);
					
  								if(stristr($embedcode, "http://www.youtube.com/embed") === FALSE) : ?>
  								
    									<?php echo $embedcode; ?>
  								
  								<?php else: ?>
  								
  										<?php 
  										$wmodepos = strpos($embedcode, '" frameborder=');
  										$embedmod = substr_replace($embedcode, '?wmode=opaque', $wmodepos, 0);
  										echo $embedmod;
  										?>
  								
  								<?php endif;?>
        						
							<?php else : ?>
						
           						<?php the_post_thumbnail('large');  ?>
						
							<?php endif; ?>
						
						</div>
						
					</header><!-- .entry-header -->

					<div class="entry-content">
						<?php the_content(); ?>
						
					</div><!-- .entry-content -->
					
				</article><!-- #post-<?php the_ID(); ?> -->


			<?php endwhile; // end of the loop. ?>

<?php get_footer(); ?>
